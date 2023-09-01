import CardsSkillsRight from "./CardsSkillsRight";
import estilo from "./SkillsRight.module.scss";
import imagem from './icon.png';

export default function SkillsRight() {
    return(
        <div className={estilo.SkillsRight}>
            <CardsSkillsRight imagem={imagem} title="HTML/CSS" text="Create user interface design with unique & modern ideas." />
            <CardsSkillsRight imagem={imagem} title="Alguma coisa" text="adsasd" />
            <CardsSkillsRight imagem={imagem} title="Alguma coisa" text="adsasd" />
            <CardsSkillsRight imagem={imagem} title="Alguma coisa" text="adsasd"/>
        </div>
    )
}