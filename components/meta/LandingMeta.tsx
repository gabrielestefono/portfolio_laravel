import Head from "next/head";

export default function LandingMeta() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Desenvolvedor Web e Mobile em Cascavel | Gabriel Estéfono</title>
      <meta
        name="description"
        content="Desenvolvedor Web em Cascavel, oferecendo soluções personalizadas em sites, sistemas e aplicativos para negócios de todos os tamanhos e segmentos."
      />
      <meta
        name="keywords"
        content="desenvolvedor, desenvolvimento web, portfólio, Webest, projetos web"
      />
      <meta name="author" content="Gabriel Estéfono" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="content-language" content="pt-BR" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gabrielestefono.com.br/" />
      <meta
        property="og:title"
        content="Desenvolvedor Web em Cascavel | Gabriel Estéfono"
      />
      <meta
        property="og:description"
        content="Desenvolvedor Web em Cascavel, oferecendo soluções personalizadas em sites, sistemas e aplicativos para negócios de todos os tamanhos e segmentos."
      />
      <meta property="og:image" content="/images/profile-og.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://gabrielestefono.com.br/" />
      <meta
        name="twitter:title"
        content="Desenvolvedor Web em Cascavel | Gabriel Estéfono"
      />
      <meta
        name="twitter:description"
        content="Desenvolvedor Web em Cascavel, oferecendo soluções personalizadas em sites, sistemas e aplicativos para negócios de todos os tamanhos e segmentos."
      />
      <meta name="twitter:image" content="/images/profile-og.png" />

      {/* Tag canonical */}
      <link rel="canonical" href="https://gabrielestefono.com.br/" />

      {/* Google Search Console */}
      <meta
        name="google-site-verification"
        content="tHTpJFyNsORoFLqxGlxzifhSOXA2mvkkf1T9_F6GeZY"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
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
        `,
        }}
      />
    </Head>
  );
}
