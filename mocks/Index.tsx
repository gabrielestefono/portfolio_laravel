import { Dashboard } from "@/types";

export const indexMocks: Dashboard = {
  presentation: {
    presentationTop: {
      greating: "Olá! Eu sou Gabriel Estéfono",
      profession: "Desenvolvedor Full Stack",
      description: [
        {
          id: 1,
          text: "Trabalho com desenvolvimento web focado em criar soluções úteis, funcionais e bem pensadas. Seja um site, um sistema ou uma aplicação mais completa, meu objetivo é entender o que você precisa e entregar algo que realmente funcione pro seu contexto.",
        },
        {
          id: 2,
          text: "Busco as ferramentas certas pra cada projeto, experimentando o novo, mas sempre com os pés no chão. A tecnologia muda o tempo todo — e eu gosto de acompanhar, sem perder o foco no que importa: resolver o problema de forma eficiente.",
        },
        {
          id: 3,
          text: "Projetos bem feitos começam com uma boa conversa.",
        },
      ],
    },
    presentationBottom: {
      initialDate: 3,
      projects: 60,
      support: "Online",
    },
  },
  skills: {
    SkillsElements: [
      {
        id: 1,
        alt: "Laravel",
        title: "Laravel",
        text: "Criação de aplicações web e apis Laravel.",
        image: "/images/laravel.svg",
      },
      {
        id: 2,
        alt: "Next.js",
        title: "Next.js",
        text: "Criação de páginas responsivas com Next.js.",
        image: "/images/nextjs.svg",
      },
      {
        id: 3,
        alt: "Nest.js",
        title: "Nest.js",
        text: "Criação de apis com o Nest.js.",
        image: "/images/nestjs.svg",
      },
      {
        id: 4,
        alt: "Angular",
        title: "Angular",
        text: "Criação de páginas responsivas com Angular.",
        image: "/images/angular.svg",
      },
    ],
  },
  projects: [
    {
      id: 1,
      image: "/images/Blog.png",
      alt: "Blog Laravel",
      title: "Blog Laravel",
      link: "https://github.com/gabrielestefono/blog_laravel",
    },
  ],
};
