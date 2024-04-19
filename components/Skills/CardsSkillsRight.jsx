import Image from "next/image";
import estilo from "./CardsSkillsRight.module.scss";

export default function CardsSkillsRight(props) {
    return(
        <div className={estilo.background}>
            <div><Image src={props.imagem} width={props.imagem.width} height={props.imagem.height} alt={props.alt} loading="eager"/></div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}