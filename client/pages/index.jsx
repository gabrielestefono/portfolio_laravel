import Presentation from "@/components/Presentation/Presentation";
import About from "@/components/About/About";
import Separator from "@/components/Separator";
import Project from "@/components/Projects/Project";
import Skills from "@/components/Skills/Skills";
import ContactMe from "@/components/ContactMe/ContactMe";

export default function Home() {
  return (
    <>
      <Presentation/>
      <Separator titulo="About"/>
      <About/>
      <Separator titulo="My Projects"/>
      <Project/>
      <Separator titulo="My Skills"/>
      <Skills />
      <Separator titulo="Contact me" />
      <ContactMe />
    </>
  )
}