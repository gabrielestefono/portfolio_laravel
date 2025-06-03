import Presentation from "@/components/Presentation/Presentation";
import WhatsAppButton from "@/components/temp/WhatsAppButton";
import { indexMocks } from "@/mocks/Index";
import Separator from "@/components/Separator";
import { lazy, Suspense } from "react";
import Layout from "@/components/layouts/LayoutBase";
import Skills from "@/components/Skills/Skills";
import Project from "@/components/Projects/Project";

const About = lazy(() => import("@/components/About/About"));

export default function Home() {
  return (
    <Layout>
      <Presentation {...indexMocks.presentation} />
      <WhatsAppButton />
      <Suspense fallback={<div>Carregando...</div>}>
        <Separator titulo="Sobre" />
        <About />
        <Separator titulo="Projetos" />
        <Project projects={indexMocks.projects} />
        <Separator titulo="Habilidades" />
        <Skills {...indexMocks.skills} />
      </Suspense>
    </Layout>
  );
}
