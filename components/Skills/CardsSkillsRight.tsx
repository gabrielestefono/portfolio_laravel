import Image from "next/image";
import estilo from "./CardsSkillsRight.module.scss";
import { SkillsElement } from "@/types";

export default function CardsSkillsRight({alt, id, image, text, title}: Readonly<SkillsElement>) {
    return(
        <div className={estilo.background}>
            <div><Image src={image} width={50} height={50} alt={alt}/></div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}