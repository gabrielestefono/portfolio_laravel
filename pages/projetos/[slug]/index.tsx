import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import { Badge } from "@/components/Projects/badge";
import { Button } from "@/components/Projects/button";
import style from "../../../styles/projectsChild.module.scss";
import LayoutBase from "@/components/layouts/LayoutBase";
import { ProjectGallery } from "@/components/Projects/ProjectGallery";

interface ProjectPageProps {
  params: { slug: string };
}

export async function getStaticProps({ params }: ProjectPageProps) {
  const { slug } = params;
  if (!getProjectBySlug(slug)) {
    return { notFound: true };
  }
  return { props: { params } };
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
}

export default function ProjectPage({ params }: Readonly<ProjectPageProps>) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <LayoutBase>
      <main className={style["page"]}>
        <div>
          <Link href="/projetos">
            <ArrowLeft />
            Voltar para projetos
          </Link>

          <div>
            {/* Left: Gallery */}
            <ProjectGallery images={project.images} projectName={project.name} />

            <div>
              <Badge variant="secondary">{project.category}</Badge>

              <h1>{project.name}</h1>

              <p>{project.description}</p>

              <div>
                <h2>Tecnologias utilizadas</h2>
                <div>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                {project.liveUrl && (
                  <Button size="lg" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                      Ver em Produção
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                      Ver no GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h2>Sobre o projeto</h2>
            <p>{project.longDescription}</p>
          </div>
        </div>
      </main>
    </LayoutBase>
  );
}
