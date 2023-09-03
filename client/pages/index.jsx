import Presentation from "@/components/Presentation/Presentation";
import estilo from "../styles/Index.module.scss";
import About from "@/components/About/About";
import Separator from "@/components/Separator";
import Project from "@/components/Projects/Project";
import Skills from "@/components/Skills/Skills";
import ContactMe from "@/components/ContactMe/ContactMe";
import Faq from "@/components/Faq/Faq";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>WeBest - Página Inicial</title>
      </Head>
      {/* <Presentation/>
      <Separator titulo="About"/>
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