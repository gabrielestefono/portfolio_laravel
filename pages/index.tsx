import Presentation from "@/components/Presentation/Presentation";
import WhatsAppButton from "@/components/temp/WhatsAppButton";
import { indexMocks } from "@/mocks/Index";
import Separator from "@/components/Separator";
import { lazy, Suspense } from "react";
import Skills from "@/components/Skills/Skills";
import Project from "@/components/Projects/Project";

const About = lazy(() => import("@/components/About/About"));

export default function Home() {
  return (
    <>
      <Presentation {...indexMocks.presentation} />
      <WhatsAppButton />
      <Suspense fallback={<div>Carregando...</div>}>
        <Separator titulo="Sobre" />
        <About />
        <Separator titulo="Projetos" />
        <Project projects={indexMocks.projects} />
        <Separator titulo="Habilidades" />
        <Skills {...indexMocks.skills} />
        {/* <Separator titulo="Contato" />
      <ContactMe />
      <Separator titulo="Perguntas Frequentes" />
      <Faq /> */}
      </Suspense>
    </>
  );
}
