import Image from "next/image";
import estilo from "./ProjectsCard.module.scss";

export default function ProjectsCard(props) {
	return (
		<div className={estilo.card}>
			<h2>{props.title}</h2>
			<Image className={estilo.imagem} src={props.img} width={props.img.width} height={props.img.height}/>
		</div>
	)
}