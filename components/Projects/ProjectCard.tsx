import { Project } from "@/pages/projetos";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { Button } from "./button";
import style from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <div className={style["project-card"]}>
      {/* Image Container */}
      <Link href={`/projetos/${project.slug}`}>
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.name}
          fill
        />
        <div>
          <span>Ver detalhes</span>
        </div>
      </Link>

      {/* Content */}
      <div>
        <div>
          <Link href={`/projetos/${project.slug}`}>
            <h3>{project.name}</h3>
          </Link>
          <p>{project.category}</p>
        </div>

        <p>{project.description}</p>

        {/* Tech Badges */}
        <div>
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div>
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4 mr-1.5" />
                GitHub
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" asChild>
              <a
                href={project.liveUrl}
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
