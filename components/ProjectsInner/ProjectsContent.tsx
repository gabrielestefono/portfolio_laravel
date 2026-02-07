import ProjectsCard from "./ProjectsCard/ProjectsCard";
import style from "./ProjectsContent.module.scss";
import project1 from "./project1.webp";

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const projects: Project[] = [];

export default function ProjectsContent() {
  const titulo = "Doctor Appointment web";
  return (
    <div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <div className="rounded-full bg-muted p-6">
            <svg
              className="size-12 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-foreground">
            Nenhum projeto ainda
          </h3>
          <p className="mt-2 text-muted-foreground">
            Em breve novos projetos serão adicionados.
          </p>
        </div>
      )}
    </div>
  );
}
