import estilo from "./Project.module.scss";
import Direita from "./Direita";
import Esquerda from "./Esquerda";
import { useEffect } from "react";
import { Project as ProjectArray } from "@/types";

export default function Project({
  projects,
}: Readonly<{ projects: ProjectArray[] }>) {
  useEffect(() => {
    console.log(projects);
  }, [projects]);
  return (
    <section className={estilo.projects} id="projetos">
      <Esquerda />
      <Direita projects={projects} />
    </section>
  );
}
