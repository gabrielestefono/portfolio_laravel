export const frontend = {
  title: "Frontend",
  slug: "frontend",
  date: "12 de Abril, 2023",
  readTime: "8 min de leitura",
  author: "Gabriel Estéfono",
  authorImage: "/images/profile.png",
  coverImage: "/images/frontend.png",
  excerpt:
    "Aprenda como utilizar HTML semântico para melhorar o SEO do seu site e proporcionar uma melhor experiência para seus usuários.",
  content: `
    <p>O HTML semântico refere-se ao uso de tags HTML que transmitem o significado do conteúdo, em vez de apenas definir sua aparência. Isso é crucial para SEO porque ajuda os motores de busca a entender melhor o conteúdo da sua página.</p>
    
    <h2>Por que o HTML semântico é importante?</h2>
    
    <p>Quando você usa tags semânticas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code> e <code>&lt;footer&gt;</code>, você está fornecendo contexto adicional para os motores de busca.</p>
    
    <p>Isso ajuda os algoritmos a:</p>
    
    <ul>
      <li>Entender a estrutura da sua página</li>
      <li>Identificar o conteúdo mais importante</li>
      <li>Relacionar seu conteúdo com consultas de pesquisa relevantes</li>
    </ul>
    
    <h2>Exemplos de HTML semântico</h2>
    
    <p>Veja abaixo um exemplo de código HTML não semântico versus semântico:</p>
    
    <h3>Não semântico:</h3>
    
    <pre><code>
    &lt;div class="header"&gt;
      &lt;div class="logo"&gt;Meu Site&lt;/div&gt;
      &lt;div class="nav"&gt;
        &lt;div&gt;Home&lt;/div&gt;
        &lt;div&gt;Sobre&lt;/div&gt;
        &lt;div&gt;Contato&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    
    &lt;div class="main-content"&gt;
      &lt;div class="article"&gt;
        &lt;div class="title"&gt;Meu Artigo&lt;/div&gt;
        &lt;div class="content"&gt;Conteúdo do artigo...&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    
    &lt;div class="footer"&gt;
      &lt;div&gt;Copyright 2023&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    
    <h3>Semântico:</h3>
    
    <pre><code>
    &lt;header&gt;
      &lt;h1&gt;Meu Site&lt;/h1&gt;
      &lt;nav&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Sobre&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Contato&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
      &lt;article&gt;
        &lt;h2&gt;Meu Artigo&lt;/h2&gt;
        &lt;p&gt;Conteúdo do artigo...&lt;/p&gt;
      &lt;/article&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
      &lt;p&gt;Copyright 2023&lt;/p&gt;
    &lt;/footer&gt;
    </code></pre>
    
    <h2>Benefícios para SEO</h2>
    
    <p>Usar HTML semântico traz diversos benefícios para SEO:</p>
    
    <ol>
      <li><strong>Melhor rastreamento:</strong> Os motores de busca podem rastrear seu site de forma mais eficiente.</li>
      <li><strong>Relevância aprimorada:</strong> Ajuda a estabelecer a relevância do seu conteúdo para consultas específicas.</li>
      <li><strong>Rich snippets:</strong> Facilita a exibição de rich snippets nos resultados de pesquisa.</li>
      <li><strong>Acessibilidade:</strong> Melhora a acessibilidade, o que também é um fator de classificação.</li>
    </ol>
    
    <h2>Conclusão</h2>
    
    <p>Adotar HTML semântico é uma estratégia simples, mas poderosa para melhorar o SEO do seu site. Não apenas ajuda os motores de busca a entender seu conteúdo, mas também melhora a acessibilidade e a experiência do usuário.</p>
    
    <p>Comece a implementar essas práticas hoje e observe a melhoria gradual no desempenho do seu site nos resultados de pesquisa.</p>
  `,
  tags: ["HTML", "SEO", "Desenvolvimento Web", "Frontend"],
  relatedPosts: [
    {
      title: "Otimizando Imagens para Web",
      slug: "otimizando-imagens-para-web",
    },
    {
      title: "Guia Completo de Meta Tags para SEO",
      slug: "guia-completo-meta-tags-seo",
    },
    {
      title: "CSS Moderno: Flexbox e Grid",
      slug: "css-moderno-flexbox-grid",
    },
  ],
};