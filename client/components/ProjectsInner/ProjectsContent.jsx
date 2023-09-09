import ProjectsCard from "./ProjectsCard/ProjectsCard";
import estilo from "./ProjectsContent.module.scss";
import project1 from "./project1.webp";

export default function ProjectsContent() {
	const titulo = "Doctor Appointment web";
	return (
		<div className={estilo.content}>
			<div>
				<ProjectsCard img={project1} title={titulo}/>
				<ProjectsCard img={project1} title={titulo}/>
				<ProjectsCard img={project1} title={titulo}/>
				<ProjectsCard img={project1} title={titulo}/>
			</div>
		</div>
	)
}