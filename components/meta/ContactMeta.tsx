import Head from "next/head";

export default function ContactMeta() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>
        Sobre Gabriel Estéfono | Desenvolvedor Web e Mobile em Cascavel
      </title>
      <meta
        name="description"
        content="Conheça minha trajetória como desenvolvedor web e mobile. De freelas aos projetos em empresas como Tuxon, CTMGEO e Quero Passagem, passando por tecnologias como Next.js, Vue.js, Laravel e mais."
      />
      <meta
        name="keywords"
        content="Gabriel Estéfono, desenvolvedor, carreira, história, desenvolvimento web, desenvolvimento mobile, Next.js, Vue.js, Laravel, Quero Passagem, Tuxon, CTMGEO"
      />
      <meta name="author" content="Gabriel Estéfono" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="content-language" content="pt-BR" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gabrielestefono.com.br/sobre" />
      <meta
        property="og:title"
        content="Sobre Gabriel Estéfono | Desenvolvedor Web e Mobile"
      />
      <meta
        property="og:description"
        content="Veja como foi minha trajetória como desenvolvedor, dos primeiros freelas até projetos em empresas como Quero Passagem, Tuxon e CTMGEO, usando tecnologias como Next.js, Vue.js e Laravel."
      />
      <meta property="og:image" content="/images/profile-og.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://gabrielestefono.com.br/sobre" />
      <meta
        name="twitter:title"
        content="Sobre Gabriel Estéfono | Desenvolvedor Web e Mobile"
      />
      <meta
        name="twitter:description"
        content="Minha trajetória como desenvolvedor, dos freelas aos projetos em empresas como Quero Passagem, Tuxon e CTMGEO."
      />
      <meta name="twitter:image" content="/images/profile-og.png" />

      {/* Tag canonical */}
      <link rel="canonical" href="https://gabrielestefono.com.br/sobre" />

      {/* Google Search Console */}
      <meta
        name="google-site-verification"
        content="tHTpJFyNsORoFLqxGlxzifhSOXA2mvkkf1T9_F6GeZY"
      />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gabriel Estéfono",
            "url": "https://gabrielestefono.com.br",
            "jobTitle": "Desenvolvedor Full Stack",
            "description": "Minha trajetória como desenvolvedor, dos primeiros freelas até atuar em empresas como Quero Passagem, Tuxon e CTMGEO, usando Next.js, Vue.js, Laravel, PHP e outras tecnologias.",
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
          }`,
        }}
      />
    </Head>
  );
}
