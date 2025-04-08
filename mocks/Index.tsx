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
      initialDate: new Date().getFullYear() - new Date("2023-01-01").getFullYear(),
      projects: 60,
      support: "Online",
    },
  },
};
