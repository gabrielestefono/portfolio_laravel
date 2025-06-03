// Dados do roadmap com posições fixas para o SVG

export const frontend = {
  label: "Frontend",
  height: 500,
  nodes: [
    {
      id: "node-frontend",
      position: {
        x: 350,
        y: 50,
      },
      data: {
        label: "Frontend",
        description:
          "Desenvolvimento Frontend é a prática de converter dados em uma interface gráfica, através do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com esses dados.",
        type: "start",
        completed: false,
        links: [
          {
            text: "Webest - Frontend",
            url: "/estude-comigo/frontend/frontend",
            type: "internal",
          },
          {
            text: "MDN Web Docs",
            url: "https://developer.mozilla.org/pt-BR/docs/Web",
            type: "documentation",
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com/",
            type: "resource",
          },
        ],
      },
    },
    {
      id: "node-basicos",
      position: {
        x: 350,
        y: 150,
      },
      data: {
        label: "Básicos",
        description: "",
        type: "resource",
        completed: false,
        links: [],
      },
    },
    {
      id: "node-html",
      position: {
        x: 100,
        y: 150,
      },
      data: {
        label: "HTML",
        description:
          "HTML (HyperText Markup Language) é a linguagem de marcação padrão para documentos projetados para serem exibidos em um navegador da web.",
        type: "skill",
        completed: false,
        links: [
          {
            text: "WeBest - Tutorial HTML",
            url: "/estude-comigo/frontend/html",
            type: "internal",
          },
          {
            text: "W3Schools HTML Tutorial",
            url: "https://www.w3schools.com/html/",
            type: "external",
          },
          {
            text: "HTML5 Doctor",
            url: "http://html5doctor.com/",
            type: "resource",
          },
          {
            text: "MDN HTML Elements Reference",
            url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element",
            type: "documentation",
          },
        ],
      },
    },
    {
      id: "node-css",
      position: {
        x: 600,
        y: 150,
      },
      data: {
        label: "CSS",
        description:
          "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou XML.",
        type: "skill",
        completed: false,
        links: [
          {
            text: "CSS Tricks",
            url: "https://css-tricks.com/",
            type: "external",
          },
          {
            text: "Flexbox Froggy",
            url: "https://flexboxfroggy.com/",
            type: "skill",
          },
          {
            text: "MDN CSS Reference",
            url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference",
            type: "documentation",
          },
        ],
      },
    },
    {
      id: "node-javascript",
      position: {
        x: 350,
        y: 250,
      },
      data: {
        label: "Javascript",
        description: "Javascript é essencial pra desenvolvedor frontend",
        type: "skill",
        completed: false,
        links: [
          {
            text: "Referência Javascript",
            url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
            type: "external",
          },
        ],
      },
    },
  ],
  edges: [
    {
      id: "edge-frontend-1",
      source: "node-frontend",
      target: "node-basicos",
      animated: false,
    },
    {
      id: "edge-basico-1",
      source: "node-basicos",
      target: "node-html",
      animated: false,
    },
    {
      id: "edge-basico-2",
      source: "node-basicos",
      target: "node-css",
      animated: false,
    },
    {
      id: "edge-basico-3",
      source: "node-basicos",
      target: "node-javascript",
      animated: false,
    },
  ],
};
