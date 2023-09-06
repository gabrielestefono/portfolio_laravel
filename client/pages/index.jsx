// import Presentation from "@/components/Presentation/Presentation";
import estilo from "../styles/Index.module.scss";
import About from "@/components/About/About";
import Separator from "@/components/Separator";
import Project from "@/components/Projects/Project";
import Skills from "@/components/Skills/Skills";
import ContactMe from "@/components/ContactMe/ContactMe";
import Faq from "@/components/Faq/Faq";

import React, { Suspense } from "react";

const Presentation = React.lazy(() => import("../components/Presentation/Presentation"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
          <Presentation/>
      </Suspense>
      {/* <Separator titulo="About"/>
      <About/>
      <Separator titulo="My Projects"/>
      <Project/>
      <Separator titulo="My Skills"/>
      <Skills />
      <Separator titulo="Contact me" />
      <ContactMe />
      <Separator titulo="Frequently Asked Questions" />
      <Faq /> */}
    </>
  )
}