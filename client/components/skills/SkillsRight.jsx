import CardsSkillsRight from "./CardsSkillsRight";
import estilo from "./SkillsRight.module.scss";

export default function SkillsRight(){
    return(
        <div className={estilo.SkillsRight}>
            <CardsSkillsRight image="asd" title="Alguma coisa" text="adsasd"/>
        </div>
    )
}