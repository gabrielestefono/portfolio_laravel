import Presentation from "@/components/Presentation/Presentation";
import About from "@/components/About/About";
import Separator from "@/components/Separator";
import Skills from "@/components/Skills/Skills";
import ContactMe from "@/components/ContactMe/ContactMe";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <>
      <Presentation/>
      <Separator titulo="Sobre"/>
      <About/>
      <Separator titulo="Projetos"/>
      {/* <Project/> */}
      <Separator titulo="Habilidades"/>
      <Skills/>
      <Separator titulo="Contato"/>
      <ContactMe/>
      <Separator titulo="Perguntas Frequentes"/>
      <Faq/>
    </>
  )
}
