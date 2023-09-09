import Image from "next/image";
import estilo from "./SkillsInnerCard.module.scss";

export default function SkillsInnerCard(props) {
	return (
		<div className={estilo.card}>
			<div>
				<Image src={props.img.src} width={props.img.height} height={props.img.width} />
			</div>
			<h2>{props.text}</h2>
		</div>
	)
}