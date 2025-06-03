"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Calendar, Clock, X } from "lucide-react";
import styles from "./Blog.module.scss";

// Tipos para os posts do blog
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

// Dados simulados para os posts do blog
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Dominando HTML Semântico para Melhor SEO",
    slug: "dominando-html-semantico",
    excerpt:
      "Aprenda como utilizar HTML semântico para melhorar o SEO do seu site e proporcionar uma melhor experiência para seus usuários.",
    date: "12 de Abril, 2023",
    readTime: "8 min de leitura",
    coverImage: "/images/frontend.png",
    tags: ["HTML", "SEO", "Frontend"],
    featured: true,
  },
  {
    id: "2",
    title: "CSS Grid vs Flexbox: Quando Usar Cada Um",
    slug: "css-grid-vs-flexbox",
    excerpt:
      "Uma comparação detalhada entre CSS Grid e Flexbox, com exemplos práticos e casos de uso para cada tecnologia.",
    date: "5 de Maio, 2023",
    readTime: "10 min de leitura",
    coverImage: "/images/frontend.png",
    tags: ["CSS", "Frontend", "Design"],
    featured: true,
  },
  {
    id: "3",
    title: "JavaScript Assíncrono: Promises, Async/Await e Callbacks",
    slug: "javascript-assincrono",
    excerpt:
      "Um guia completo sobre como trabalhar com operações assíncronas em JavaScript usando diferentes abordagens.",
    date: "18 de Junho, 2023",
    readTime: "12 min de leitura",
    coverImage: "/images/frontend.png",
    tags: ["JavaScript", "Frontend", "Programação"],
  },
  {
    id: "4",
    title: "Otimizando Imagens para Web",
    slug: "otimizando-imagens-para-web",
    excerpt:
      "Técnicas e ferramentas para otimizar imagens e melhorar o desempenho do seu site.",
    date: "2 de Julho, 2023",
    readTime: "6 min de leitura",
    coverImage: "/images/frontend.png",
    tags: ["Performance", "Frontend", "Design"],
  },
  {
    id: "5",
    title: "Guia Completo de Meta Tags para SEO",
    slug: "guia-completo-meta-tags-seo",
    excerpt:
      "Tudo o que você precisa saber sobre meta tags para otimizar seu site para motores de busca.",
    date: "14 de Agosto, 2023",
    readTime: "9 min de leitura",
    coverImage: "/images/frontend.png",
    tags: ["SEO", "HTML", "Marketing Digital"],
  },
  {
    id: "6",
    title: "CSS Moderno: Flexbox e Grid",
    slug: "css-moderno-flexbox-grid",
    excerpt:
      "Como utilizar as tecnologias modernas de CSS para criar layouts responsivos e flexíveis.",
    date: "29 de Setembro, 2023",
    readTime: "11 min de leitura",
    coverImage: "/images/frontend.png",
    tags: ["CSS", "Frontend", "Responsividade"],
  },
  {
    id: "7",
    title: "Acessibilidade Web: Boas Práticas",
    slug: "acessibilidade-web-boas-praticas",
    excerpt:
      "Como tornar seu site acessível para todos os usuários, incluindo pessoas com deficiências.",
    date: "10 de Outubro, 2023",
    readTime: "7 min de leitura",
    coverImage: "/images/frontend.png",
    tags: ["Acessibilidade", "Frontend", "UX"],
    featured: true,
  },
  {
    id: "8",
    title: "React vs Vue: Comparação Detalhada",
    slug: "react-vs-vue-comparacao",
    excerpt:
      "Uma análise comparativa entre os frameworks React e Vue.js para ajudar você a escolher o melhor para seu projeto.",
    date: "5 de Novembro, 2023",
    readTime: "14 min de leitura",
    coverImage: "/images/frontend.png",
    tags: ["React", "Vue", "JavaScript", "Frontend"],
  },
];

// Extrair todas as tags únicas dos posts
const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort((a, b) => a.localeCompare(b));

export default function BlogPage() {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");

  const [activeTag, setActiveTag] = useState<string | null>(tagParam);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  // Atualizar os posts filtrados quando a tag ativa mudar
  useEffect(() => {
    if (activeTag) {
      setFilteredPosts(
        blogPosts.filter((post) => post.tags.includes(activeTag))
      );
    } else {
      setFilteredPosts(blogPosts);
    }
  }, [activeTag]);

  // Função para limpar o filtro de tag
  const clearTagFilter = () => {
    setActiveTag(null);
    // Atualizar a URL sem o parâmetro de tag
    const url = new URL(window.location.href);
    url.searchParams.delete("tag");
    window.history.pushState({}, "", url);
  };

  // Posts em destaque
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Últimos posts (excluindo os em destaque)
  const latestPosts = filteredPosts
    .filter(
      (post) => !featuredPosts.some((featured) => featured.id === post.id)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className={styles.blog}>
      {/* Header do Blog */}
      <div>
        <div>
          <div>
            <h1>Blog de Conhecimento</h1>
            <p>
              Artigos, tutoriais e recursos para expandir seu conhecimento em
              desenvolvimento web e tecnologia
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div>
        {/* Filtro de Tag Ativo */}
        {activeTag && (
          <div className={styles.activeTag}>
            <div>
              <div>
                <span>Filtrando por tag:</span>
                <span>{activeTag}</span>
              </div>
              <button onClick={clearTagFilter} aria-label="Limpar filtro">
                <X size={16} />
                <span>Limpar filtro</span>
              </button>
            </div>
          </div>
        )}

        {/* Grid de Conteúdo */}
        <div className={styles.gridContainer}>
          {/* Coluna Principal */}
          <div>
            {/* Posts em Destaque (apenas se não houver filtro ativo) */}
            {!activeTag && featuredPosts.length > 0 && (
              <section className={styles.destaques}>
                <h2>Posts em Destaque</h2>
                <div>
                  {featuredPosts.map((post) => (
                    <FeaturedPostCard
                      key={post.id}
                      post={post}
                      onTagClick={setActiveTag}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Últimos Posts ou Posts Filtrados */}
            <section className={styles.latestPostsMenu}>
              <h2>
                {activeTag ? `Posts sobre ${activeTag}` : "Últimos Posts"}
              </h2>

              {filteredPosts.length === 0 ? (
                <div className={styles.emptyPosts}>
                  <p>Nenhum post encontrado para a tag "{activeTag}".</p>
                  <button onClick={clearTagFilter}>Ver todos os posts</button>
                </div>
              ) : (
                <div className={styles.latestPosts}>
                  {latestPosts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onTagClick={setActiveTag}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Categorias / Tags */}
            <div className={styles.categories}>
              <h3>Categorias</h3>
              <div>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      activeTag === tag
                        ? "bg-primary text-white"
                        : "bg-primary-light text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h3>Newsletter</h3>
              <p>
                Receba as últimas atualizações e artigos diretamente na sua
                caixa de entrada.
              </p>
              <form>
                <input type="email" placeholder="Seu email" required />
                <button type="submit">Inscrever-se</button>
              </form>
            </div>

            {/* Posts Populares */}
            <div className={styles.popular}>
              <h3>Posts Populares</h3>
              <div>
                {blogPosts.slice(0, 4).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div>
                      <Image
                        src={post.coverImage || "/placeholder.svg"}
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
  );
}

// Componente para o card de post em destaque
function FeaturedPostCard({
  post,
  onTagClick,
}: Readonly<{
  post: BlogPost;
  onTagClick: (tag: string) => void;
}>) {
  return (
    <div className={styles.featuredPostCard}>
      <div>
        <div>
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
          />
        </div>
        <div>
          <div>
            {post.tags.map((tag) => (
              <button
                key={tag}
                onClick={(e) => {
                  e.preventDefault();
                  onTagClick(tag);
                  // Atualizar a URL com o parâmetro de tag
                  const url = new URL(window.location.href);
                  url.searchParams.set("tag", tag);
                  window.history.pushState({}, "", url);
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.excerpt}</p>

          <div>
            <div>
              <div>
                <Image src="/images/profile.png" alt="Gabriel Estéfono" fill />
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
                <span>{post.readTime}</span>
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
  post: BlogPost;
  onTagClick: (tag: string) => void;
}>) {
  return (
    <div className={styles.postCards}>
      <div>
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
        />
      </div>
      <div>
        <div>
          {post.tags.map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.preventDefault();
                onTagClick(tag);
                const url = new URL(window.location.href);
                url.searchParams.set("tag", tag);
                window.history.pushState({}, "", url);
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>
        <p>{post.excerpt}</p>
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
