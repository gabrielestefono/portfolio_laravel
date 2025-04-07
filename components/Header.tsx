import estilo from "./Header.module.scss";
/*import Link from "next/link"; */ // NOSONAR
import imagem from "./logo.webp";
import Head from "next/head";
import { useState } from "react";
/*import SideBar from "./HeaderComponents/SideBar"; */ // NOSONAR
import { useRouter } from "next/router";
import Image from "next/image";

export default function header() {
  const rotaAtual = useRouter();

  const [clicked, setClicked] = useState(false);

  const [rota, setRota] = useState(rotaAtual.pathname);

  if (rotaAtual.pathname != rota) {
    setClicked(false);
    setRota(rotaAtual.pathname);
  }

  /*const handleSideBar = () => {setClicked(!clicked)}; */ // NOSONAR

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Desenvolvedor Web em Cascavel | Gabriel Estéfono</title>
        <meta name="description" content="Desenvolvedor Web em Cascavel, focado em soluções eficientes e personalizadas. Criação de sites, sistemas e aplicativos sob medida para negócios e projetos de todos os tamanhos." />
        <meta name="keywords" content="desenvolvedor, desenvolvimento web, portfólio, Webest, projetos web" />
        <meta name="author" content="Gabriel Estéfono" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="pt-BR" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielestefono.com.br/" />
        <meta property="og:title" content="Desenvolvedor Web em Cascavel | Gabriel Estéfono" />
        <meta property="og:description" content="Sites, sistemas e aplicações web criadas sob medida. Atuação em Cascavel e para todo o Brasil." />
        <meta property="og:image" content="/images/profile-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://gabrielestefono.com.br/" />
        <meta name="twitter:title" content="Desenvolvedor Web em Cascavel | Gabriel Estéfono" />
        <meta name="twitter:description" content="Soluções web funcionais e bem pensadas para empresas e profissionais de todo o Brasil." />
        <meta name="twitter:image" content="/images/profile-og.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gabriel Estéfono",
            "url": "https://gabrielestefono.com.br",
            "jobTitle": "Desenvolvedor Full Stack",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cascavel",
              "addressRegion": "PR",
              "addressCountry": "BR"
            },
            "sameAs": [
              "https://github.com/gabrielestefono",
              "https://www.linkedin.com/in/gabrielestefono/"
            ]
          }
        ` }} />
      </Head>
      <div className={`${estilo.header} ${clicked ? estilo.fixed : ""}`}>
        <div>
          <div className={estilo.left}>
            <a href="/">
              <Image
                src={imagem}
                alt="Logotipo WeBest"
                width={132}
                height={61}
                priority={true}
              />
            </a>
          </div>
          <div className={estilo.right}>
            {/* <Link
              rel="preload"
              className={`${estilo.link} ${
                rotaAtual.pathname == "/" ? estilo.active : ""
              }`}
              href="/"
            >
              Início
            </Link>
           <Link
              rel="preload"
              className={`${estilo.link} ${
                rotaAtual.pathname == "/sobre" ? estilo.active : ""
              }`}
              href="/sobre"
            >
              Sobre mim
            </Link>
            <Link
              rel="preload"
              className={`${estilo.link} ${
                rotaAtual.pathname == "/projetos" ? estilo.active : ""
              }`}
              href="/projetos"
            >
              Projetos
            </Link>
            <Link
              rel="preload"
              className={`${estilo.link} ${
                rotaAtual.pathname == "/habilidades" ? estilo.active : ""
              }`}
              href="/habilidades"
            >
              Habilidades
            </Link>
            <Link
              rel="preload"
              className={`${estilo.link} ${
                rotaAtual.pathname == "/contato" ? estilo.active : ""
              }`}
              href="/contato"
            >
              Contato
            </Link>
            <div onClick={handleSideBar}>
              {clicked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.75 4.75l14.5 14.5M19.25 4.75L4.75 19.25"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div> */}
          </div>
        </div>
      </div>
      {/* {clicked ? <SideBar rotaAtual={rotaAtual.pathname} /> : <></>} // NOSONAR */}
    </>
  );
}
