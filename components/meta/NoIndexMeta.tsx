import Head from "next/head";

export default function NoIndexMeta() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Página Interna | Gabriel Estéfono</title>
      <meta
        name="description"
        content="Esta é uma página interna do site de Gabriel Estéfono, não indexada nos motores de busca."
      />
      <meta name="robots" content="noindex, nofollow" />
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="author" content="Gabriel Estéfono" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Página Interna | Gabriel Estéfono" />
      <meta
        property="og:description"
        content="Esta é uma página interna do site de Gabriel Estéfono."
      />
      <meta property="og:image" content="/images/profile-og.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Página Interna | Gabriel Estéfono" />
      <meta
        name="twitter:description"
        content="Esta é uma página interna do site de Gabriel Estéfono."
      />
      <meta name="twitter:image" content="/images/profile-og.png" />
    </Head>
  );
}
