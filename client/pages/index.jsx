import Presentation from "@/components/Presentation/Presentation";
import estilo from "../styles/Index.module.scss";
import About from "@/components/About/About";
import Separator from "@/components/Separator";
import Project from "@/components/Projects/Project";

export default function Home() {
  return (
    <>
      <Presentation/>
      <Separator titulo="About"/>
      <About/>
      <Separator titulo="My Projects"/>
      <Project/>
      <Separator titulo="My Skills"/>
    </>
  )
}