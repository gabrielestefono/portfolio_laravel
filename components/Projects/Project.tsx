import estilo from "./Project.module.scss";
import Direita from "./Direita";
import Esquerda from "./Esquerda";
import { Project as ProjectArray } from "@/interfaces/Landing";

export default function Project({
  projects,
}: Readonly<{ projects: ProjectArray[] }>) {
  return (
    <section className={estilo.projects} id="projetos">
      <div>
        <Esquerda />
        <Direita projects={projects} />
      </div>
    </section>
  );
}
