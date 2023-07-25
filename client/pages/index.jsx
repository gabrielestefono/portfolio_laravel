import Presentation from "@/components/Presentation/Presentation";
import estilo from "../styles/Index.module.scss";
import About from "@/components/About/About";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <>
      <Presentation/>
      <Separator titulo="About"/>
      <About/>
      <Separator titulo="My Projects"/>
    </>
  )
}
