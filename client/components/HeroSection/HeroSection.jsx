import estilo from "./HeroSection.module.scss";

export default function HeroSection(props) {
	return (
		<div className={estilo.herosection}>
			<div>{ props.text }</div>
		</div>
	)
}