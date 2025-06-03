import Link from "next/link";
import styles from "./Frontend.module.scss";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import { postagens } from "@/mocks/posts";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const data = postagens[slug];
  return {
    props: { data },
  };
}

export default function Frontend({ data }: Readonly<{ data: any }>) {
  return (
    <div className={styles.frontend}>
      {/* Blog Post Header */}
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
                  <span>{data.readTime}</span>
                </div>
                <div>
                  <div>
                    <Image
                      src={data.authorImage}
                      alt={data.author}
                      width={24}
                      height={24}
                    />
                  </div>
                  <span>{data.author}</span>
                </div>
              </div>
            </div>

            <div>
              <button title="Compartilhar">
                <Share2 size={18} />
                <span>Compartilhar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div>
        <div>
          <Image src={data.coverImage} alt={data.title} fill priority />
        </div>

        {/* Content */}
        <div>
          <div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>

            {/* Tags */}
            <div>
              <h3>Tags</h3>
              <div>
                {data.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Author */}
            <div>
              <h3>Sobre o Autor</h3>
              <div>
                <div>
                  <Image
                    src="/images/profile.png"
                    alt={data.author}
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

            {/* Related Posts */}
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
  );
}
