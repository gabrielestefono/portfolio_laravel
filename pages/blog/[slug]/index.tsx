import Link from "next/link";
import styles from "./Post.module.scss";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { Tag } from "@/helpers/BlogBackend";
import LayoutBase from "@/components/layouts/LayoutBase";

interface RelatedPost {
  slug: string;
  title: string;
}

interface Post {
  date: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  cover: string;
  reading_time: number;
  body: string;
  tags: Tag[];
  coverImage: string;
  relatedPosts: RelatedPost[];
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let notFound = false;
  const { slug } = context.params;
  const baseUrl = process.env.FRONTEND_URL || "http://localhost:3000";
  const fetchData = async () => {
    return await fetch(`${baseUrl}api/blog/${slug}`).then((res) => {
      if (!res.ok) {
        notFound = true;
        return;
      }
      return res.json();
    });
  };
  const data: Post | undefined = await fetchData();
  return {
    notFound,
    props: { data },
    revalidate: 86400 // 24 hours
  };
}

export default function Frontend({ data }: Readonly<{ data: Post }>) {
  return (
    <LayoutBase blog={true}>
      <div className={styles.frontend}>
        <div>
          <div>
            <div>
              <div>
                <nav>
                  <Link href="/blog">
                    <ArrowLeft size={16} />
                    <span>Voltar para o blog</span>
                  </Link>
                </nav>

                <h1>{data.title}</h1>

                <div>
                  <div>
                    <Calendar size={16} />
                    <span>{data.date}</span>
                  </div>
                  <div>
                    <Clock size={16} />
                    <span>{data.reading_time} minutos</span>
                  </div>
                  <div>
                    <div>
                      <Image
                        src="/images/profile.png"
                        alt="Gabriel Estéfono"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span>Gabriel Estéfono</span>
                  </div>
                </div>
              </div>

              <div>
                {/* <button title="Compartilhar">
                  <Share2 size={18} />
                  <span>Compartilhar</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Image src={data.coverImage} alt={data.title} fill priority />
          </div>

          <div>
            <div>
              <div>
                <div dangerouslySetInnerHTML={{ __html: data.body }} />
              </div>

              <div>
                <h3>Tags</h3>
                <div>
                  {data.tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${tag.label}`}
                    >
                      {tag.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3>Sobre o Autor</h3>
                <div>
                  <div>
                    <Image
                      src="/images/profile.png"
                      alt="Gabriel Estéfono"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4>Gabriel Estéfono</h4>
                    <p>Desenvolvedor Web</p>
                  </div>
                </div>
                <p>
                  Desenvolvedor com mais de 3 anos de experiência em HTML, CSS e
                  JavaScript.
                </p>
              </div>

              <div>
                <h3>Posts Relacionados</h3>
                <div className="space-y-4">
                  {data.relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                    >
                      <h4>{relatedPost.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
}
