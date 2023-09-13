import estilo from "./HeroSection.module.scss";
import { useEffect, useRef } from "react";
import bg1 from "./bg1.webp";
import bg2 from "./bg2.webp";
import bg3 from "./bg3.webp";
import bg4 from "./bg4.webp";
import bg5 from "./bg5.webp";

export default function HeroSection(props) {

	// const divBg = useRef(null);

	// useEffect(() => {
	// 	carregar(divBg.current);
	// }, []);

	// let carregar = (elementoRecebido) => {
	// 	let tamanho = elementoRecebido.getBoundingClientRect().width;
	// 	if(tamanho <= 768){
	// 		elementoRecebido.style.backgroundImage = `url(${bg1.src})`;
	// 	}
	// }
	return (
		<div className={estilo.herosection} ref={divBg}>
			<div>{ props.text }</div>
		</div>
	)
}