import LayoutBase from "@/components/layouts/LayoutBase";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import Separator from "@/components/Separator";
import style from "../../styles/projects.module.scss";
import { Projeto } from "@/helpers/ProjetosBackend";
import { AuthenticationBackend } from "@/helpers/AuthenticationBackend";

export async function getServerSideProps() {
  const authBackend = new AuthenticationBackend();
  const { frontendUrl } = authBackend;
  const projects: Projeto[] = await fetch(`${frontendUrl}/api/projetos`).then(
    (res) => res.json(),
  );

  return {
    props: {
      projects,
    },
  };
}

export default function projetos({ projects }: { projects: Projeto[] }) {
  // const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.";

  return (
    <LayoutBase>
      <main className={style["projects"]}>
        <div>
          <Separator titulo="Projetos" />
          <div>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div>
              <div>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3>Nenhum projeto ainda</h3>
              <p>Em breve novos projetos serão adicionados.</p>
            </div>
          )}
        </div>
      </main>
    </LayoutBase>
  );
}
