import Presentation from "@/components/Presentation/Presentation";
import WhatsAppButton from "@/components/temp/WhatsAppButton";
// import Skills from "@/components/Skills/Skills";
// import ContactMe from "@/components/ContactMe/ContactMe";
// import Faq from "@/components/Faq/Faq";
import { indexMocks } from "@/mocks/Index";
import Separator from "@/components/Separator";
import { lazy, Suspense } from "react";

const About = lazy(() => import("@/components/About/About"));

export default function Home() {
  return (
    <>
      <Presentation {...indexMocks.presentation} />
      <WhatsAppButton />
      <Suspense fallback={<div>Carregando...</div>}>
        <Separator titulo="Sobre" />
        <About />
      </Suspense>
      {/* <Separator titulo="Projetos" />
      <Project/>
      <Separator titulo="Habilidades" />
      <Skills />
      <Separator titulo="Contato" />
      <ContactMe />
      <Separator titulo="Perguntas Frequentes" />
      <Faq /> */}
    </>
  );
}
