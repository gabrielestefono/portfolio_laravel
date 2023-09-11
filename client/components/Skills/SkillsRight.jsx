import CardsSkillsRight from "./CardsSkillsRight";
import estilo from "./SkillsRight.module.scss";
import imagem from './icon.webp';

export default function SkillsRight() {
    return(
        <div className={estilo.SkillsRight}>
            <CardsSkillsRight imagem={imagem} title="HTML/CSS" text="Create user interface design with unique & modern ideas." alt="alt imagem"/>
            <CardsSkillsRight imagem={imagem} title="Alguma coisa" text="adsasd" alt="alt imagem"/>
            <CardsSkillsRight imagem={imagem} title="Alguma coisa" text="adsasd" alt="alt imagem"/>
            <CardsSkillsRight imagem={imagem} title="Alguma coisa" text="adsasd" alt="alt imagem"/>
        </div>
    )
}