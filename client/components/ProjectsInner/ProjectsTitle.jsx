import estilo from "./ProjectsTitle.module.scss";

export default function ProjectsTitle(props) {
	return (
		<div className={estilo.title}>
			<p>{props.text}</p>
		</div>
	)
}