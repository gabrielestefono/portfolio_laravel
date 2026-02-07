import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { Button } from "./button";
import style from "./ProjectCard.module.scss";
import { Projeto } from "@/helpers/ProjetosBackend";

interface ProjectCardProps {
  project: Projeto;
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <div className={style["project-card"]}>
      {/* Image Container */}
      <Link href={`/projetos/${project.nome}`}>
        <Image
          src={project.imagens[0]?.filename || "/placeholder.svg"}
          alt={project.nome}
          fill
        />
        <div>
          <span>Ver detalhes</span>
        </div>
      </Link>

      {/* Content */}
      <div>
        <div>
          <Link href={`/projetos/${project.nome}`}>
            <h3>{project.nome}</h3>
          </Link>
          <p>{project.categoria.nome}</p>
        </div>

        <p>{project.descricao_breve}</p>

        {/* Tech Badges */}
        <div>
          {project.tecnologias.slice(0, 4).map((tech) => (
            <Badge key={tech.id} variant="secondary">
              {tech.nome}
            </Badge>
          ))}
          {project.tecnologias.length > 4 && (
            <Badge variant="secondary">+{project.tecnologias.length - 4}</Badge>
          )}
        </div>

        {/* Actions */}
        <div>
          {project.link_github && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.link_github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4 mr-1.5" />
                GitHub
              </a>
            </Button>
          )}
          {project.link_site && (
            <Button size="sm" asChild>
              <a
                href={project.link_site}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4 mr-1.5" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
