import Image from "next/image";
import { ExternalLink, Github, Link } from "lucide-react";
import { Project } from "../ProjectsContent";
import { Button } from "@/components/Projects/button";
import { Badge } from "@/components/Projects/badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectsCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-accent/10 hover:border-accent/50">
      {/* Image Container */}
      <Link
        href={`/projetos/${project.slug}`}
        className="relative aspect-[4/3] overflow-hidden"
      >
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground bg-primary px-4 py-2 rounded-lg font-medium text-sm">
            Ver detalhes
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        <div>
          <Link href={`/projetos/${project.slug}`}>
            <h3 className="font-semibold text-lg text-card-foreground hover:text-accent transition-colors line-clamp-1">
              {project.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground">{project.category}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-secondary/80 text-secondary-foreground"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-2">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-border hover:border-accent hover:text-accent bg-transparent"
              asChild
            >
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
            <Button
              size="sm"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
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
