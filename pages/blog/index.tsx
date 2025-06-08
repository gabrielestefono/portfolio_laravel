"use client";

import { BlogPost, Post } from "@/helpers/BlogBackend";
import { Calendar, Clock, X } from "lucide-react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.scss";
import { useRouter } from "next/router";
import LayoutBase from "@/components/layouts/LayoutBase";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let notFound = false;
  const { query } = context;
  if (typeof query?.tag !== "string" && typeof query?.tag !== "undefined") {
    notFound = true;
    return { notFound };
  }
  const queryString: string = query?.tag ? `?tag=${query.tag}` : "";
  const queryArray = query?.tag ? query.tag.split(",") : [];
  const fetchData = async () => {
    return await fetch(`http://localhost:3000/api/blog${queryString}`).then(
      (res) => {
        if (!res.ok) {
          notFound = true;
          return;
        }
        return res.json();
      }
    );
  };
  const data: BlogPost | undefined = await fetchData();
  if (data) {
    data.searched = false;
    data.queryString = queryString;
    data.query = { tag: queryArray };
  }
  return {
    notFound,
    props: { data },
  };
}

export default function BlogPage({ data }: Readonly<{ data: BlogPost }>) {
  // Dados recebidos do servidor
  const { allTags, highlights, latestPosts, query, queryString } = data;

  const activeTags = (() => {
    if (!query.tag) {
      return [];
    }
    return Array.isArray(query.tag) ? query.tag : [query.tag];
  })();

  const router = useRouter();

  // Posts em destaque
  const featuredPosts = highlights.filter((post) => post);

  const isTagActive = (label: string): boolean => {
    if (Array.isArray(query.tag)) {
      return query.tag.some((tag) => tag === label);
    }
    return query.tag === label;
  };

  const toggleTag = (id: number) => {
    const tagLabel = allTags.find((tag) => tag.id === id).label;
    const isTagActive = activeTags.some((tag) => tag === tagLabel);
    if (isTagActive) {
      let newQuery = queryString.replace(`?tag=${tagLabel},`, "?tag=");
      newQuery = newQuery.replace(`?tag=${tagLabel}`, "");
      newQuery = newQuery.replace(`,${tagLabel}`, "");
      router.replace(`/blog${newQuery}`);
      return;
    }
    const containsQueries = queryString.includes("?");
    if (containsQueries) {
      const arrayQuery: string = `${queryString},${tagLabel}`;
      router.replace(`/blog${arrayQuery}`);
      return;
    }
    router.replace(`/blog?tag=${tagLabel}`);
  };

  const clearTagFilter = () => {
    router.replace(`/blog`);
  };

  return (
    <LayoutBase blog={true}>
      <div className={styles.blog}>
        {/* Header do Blog */}
        <div>
          <div>
            <div>
              <h1>Blog de Estudos e Aprendizado</h1>
              <p>
                Acompanhe minha jornada de descobertas, explore novos
                conhecimentos e aprenda junto comigo!
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            {activeTags.length > 0 && (
              <div className={styles.activeTag}>
                <div>
                  <div>
                    <span>Filtrando por tag:</span>
                    {activeTags.map((tag, index) => (
                      <button
                        onClick={() =>
                          toggleTag(allTags.find((el) => el.label === tag).id)
                        }
                        key={`${index}${tag}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  <button onClick={clearTagFilter} aria-label="Limpar filtro">
                    <X size={16} />
                    <span>Limpar filtro</span>
                  </button>
                </div>
              </div>
            )}

            <div className={styles.gridContainer}>
              <div>
                {activeTags.length === 0 && featuredPosts.length > 0 && (
                  <section className={styles.destaques}>
                    <h2>Posts em Destaque</h2>
                    <div>
                      {featuredPosts.map((post) => (
                        <FeaturedPostCard
                          key={post.id}
                          post={post}
                          onTagClick={toggleTag}
                        />
                      ))}
                    </div>
                  </section>
                )}

                <section className={styles.latestPostsMenu}>
                  <h2>
                    {activeTags ? `Posts sobre ${activeTags}` : "Últimos Posts"}
                  </h2>

                  {latestPosts.length === 0 ? (
                    <div className={styles.emptyPosts}>
                      <p>Nenhum post encontrado para a tag "{activeTags}".</p>
                      <button onClick={clearTagFilter}>
                        Ver todos os posts
                      </button>
                    </div>
                  ) : (
                    <div className={styles.latestPosts}>
                      {data.latestPosts.map((post) => (
                        <PostCard
                          key={post.id}
                          post={post}
                          onTagClick={toggleTag}
                        />
                      ))}
                    </div>
                  )}
                </section>
              </div>

              <div className={styles.sidebar}>
                <div className={styles.categories}>
                  <h3>Categorias</h3>
                  <div>
                    {allTags.map((tag) => (
                      <button
                        key={tag.id}
                        className={isTagActive(tag.label) ? styles.active : ""}
                        onClick={() => toggleTag(tag.id)}
                      >
                        {tag.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.popular}>
                  <h3>Posts Populares</h3>
                  <div>
                    {data.latestPosts.slice(0, 4).map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <div>
                          <Image
                            src={post.thumbnail_post}
                            alt={post.title}
                            fill
                          />
                        </div>
                        <div>
                          <h4>{post.title}</h4>
                          <p>{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
}

// Componente para o card de post em destaque
function FeaturedPostCard({
  post,
  onTagClick,
}: Readonly<{
  post: Post;
  onTagClick: (tag: number) => void;
}>) {
  return (
    <div className={styles.featuredPostCard}>
      <div>
        <div>
          <Image
            src={post.thumbnail_post}
            alt={post.title}
            width={390}
            height={172}
            priority={false}
          />
        </div>
        <div>
          <div>
            {post.tags.map((tag) => (
              <button
                key={tag.id}
                onClick={(e) => {
                  e.preventDefault();
                  onTagClick(tag.id);
                  const url = new URL(window.location.href);
                  url.searchParams.set("tag", tag.label);
                  window.history.pushState({}, "", url);
                }}
              >
                {tag.label}
              </button>
            ))}
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.description}</p>

          <div>
            <div>
              <div>
                <Image
                  src="/images/profile.png"
                  alt="Gabriel Estéfono"
                  width={32}
                  height={32}
                  priority={false}
                />
              </div>
              <span>Gabriel Estéfono</span>
            </div>

            <div>
              <div>
                <Calendar size={14} />
                <span>{post.date.split(",")[0]}</span>
              </div>
              <div>
                <Clock size={14} />
                <span>{post.reading_time} min de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostCard({
  post,
  onTagClick,
}: Readonly<{
  post: Post;
  onTagClick: (tag: number) => void;
}>) {
  return (
    <div className={styles.postCards}>
      <div>
        <Image src={post.thumbnail_post} alt={post.title} fill />
      </div>
      <div>
        <div>
          {post.tags.map((tag) => (
            <button
              key={tag.id}
              onClick={(e) => {
                e.preventDefault();
                onTagClick(tag.id);
                const url = new URL(window.location.href);
                url.searchParams.set("tag", tag.label);
                window.history.pushState({}, "", url);
              }}
            >
              {tag.label}
            </button>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>
        <p>{post.description}</p>
        <div>
          <div>
            <div>
              <Image src="/images/profile.png" alt="Gabriel Estéfono" fill />
            </div>
            <span>Gabriel Estéfono</span>
          </div>
          <div>{post.date.split(",")[0]}</div>
        </div>
      </div>
    </div>
  );
}
