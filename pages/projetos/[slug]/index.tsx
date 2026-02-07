import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/Projects/badge";
import { Button } from "@/components/Projects/button";
import style from "../../../styles/projectsChild.module.scss";
import LayoutBase from "@/components/layouts/LayoutBase";
import { ProjectGallery } from "@/components/Projects/ProjectGallery";
import { AuthenticationBackend } from "@/helpers/AuthenticationBackend";
import { Projeto, Slug } from "@/helpers/ProjetosBackend";

interface Params {
  slug: string;
}

interface ProjectPageProps {
  project: Projeto | null;
}

async function getSlugs(): Promise<Slug[]> {
  const auth = new AuthenticationBackend();
  const url = auth.frontendUrl;
  if (!url) {
    return [];
  }
  let project: Slug[] = [];
  await fetch(`${url}/api/projetos-slugs`)
    .then(async (res) => {
      if (res.ok) {
        project = await res.json();
      }

      return [];
    })
    .catch(() => {
      project = [];
    });

  return project;
}

export async function getStaticPaths() {
  const slugList = await getSlugs();

  return {
    paths: slugList.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
}

async function getProjectBySlug(slug: string): Promise<Projeto | null> {
  const auth = new AuthenticationBackend();
  const url = auth.frontendUrl;
  if (!url) {
    return null;
  }
  let project: Projeto | null = null;
  await fetch(`${url}/api/projetos/${slug}`)
    .then(async (res) => {
      if (res.ok) {
        project = await res.json();
      }

      return null;
    })
    .catch(() => {
      project = null;
    });

  return project;
}

export async function getStaticProps({ params }: { params: Params }) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return { notFound: true };
  }

  return { props: { project }, revalidate: 60 };
}

export default function ProjectPage({ project }: Readonly<ProjectPageProps>) {
  if (!project) {
    return <div>Carregando...</div>;
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
            <ProjectGallery
              images={project.imagens.map((img) => img.filename)}
              projectName={project.nome}
            />

            <div>
              <Badge variant="secondary">{project.categoria.nome}</Badge>

              <h1>{project.nome}</h1>

              <p>{project.descricao_breve}</p>
              <div>
                <h2>Tecnologias utilizadas</h2>
                <div>
                  {project.tecnologias.map((tech) => (
                    <Badge key={tech.id} variant="outline">
                      {tech.nome}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                {project.link_site && (
                  <Button size="lg" asChild>
                    <a
                      href={project.link_site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                      Ver em Produção
                    </a>
                  </Button>
                )}
                {project.link_github && (
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href={project.link_github}
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
            <p>{project.descricao}</p>
          </div>
        </div>
      </main>
    </LayoutBase>
  );
}
