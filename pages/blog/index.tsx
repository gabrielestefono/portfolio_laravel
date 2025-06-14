"use client";

import { BlogBackend, BlogPost, Post } from "@/helpers/BlogBackend";
import { Calendar, Clock, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.scss";
import LayoutBase from "@/components/layouts/LayoutBase";

export async function getStaticProps() {
  const backend = new BlogBackend();
  let data: BlogPost;
  const result = await backend.getPosts();
  if (!result) {
    data = {
      highlights: [],
      latestPosts: [],
      allTags: [],
    };
  } else {
    data = result;
  }

  return {
    props: { data },
    revalidate: 60,
  };
}

export default function BlogPage({ data }: Readonly<{ data: BlogPost }>) {
  // Dados recebidos do servidor
  const { allTags, highlights, latestPosts } = data;

  const activeTags = [];

  // Posts em destaque
  const featuredPosts = highlights.filter((post) => post);

  const isTagActive = false;

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
                      <a href={`/blog/${tag}`} key={`${index}${tag}`}>
                        {tag}
                      </a>
                    ))}
                  </div>
                  <a href="/blog" aria-label="Limpar filtro">
                    <X size={16} />
                    <span>Limpar filtro</span>
                  </a>
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
                        <FeaturedPostCard key={post.id} post={post} />
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
                      <a href="/blog">Ver todos os posts</a>
                    </div>
                  ) : (
                    <div className={styles.latestPosts}>
                      {data.latestPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
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
                      <a
                        key={tag.id}
                        className={isTagActive ? styles.active : ""}
                        href={`/blog/${tag.label.toLowerCase()}`}
                      >
                        {tag.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className={styles.popular}>
                  <h3>Posts Populares</h3>
                  <div>
                    {data.latestPosts.slice(0, 4).map((post) => (
                      <Link key={post.id} href={`/post/${post.slug}`}>
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
}: Readonly<{
  post: Post;
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
              <a key={tag.id} href={`/blog/${tag.label.toLowerCase()}`}>
                {tag.label}
              </a>
            ))}
          </div>

          <Link href={`/post/${post.slug}`}>
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
}: Readonly<{
  post: Post;
}>) {
  return (
    <div className={styles.postCards}>
      <div>
        <Image src={post.thumbnail_post} alt={post.title} fill />
      </div>
      <div>
        <div>
          {post.tags.map((tag) => (
            <a key={tag.id} href={`/blog/${tag.label.toLowerCase()}`}>
              {tag.label}
            </a>
          ))}
        </div>
        <Link href={`/post/${post.slug}`}>
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
