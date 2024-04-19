import SkillsLeft from "./SkillsLeft";
import SkillsRight from "./SkillsRight";
import estilo from "./Skills.module.scss";

export default function Skills(){
    return(
        <div className={estilo.skills}>
            <SkillsLeft/>
            <SkillsRight/>
        </div>
    )
}