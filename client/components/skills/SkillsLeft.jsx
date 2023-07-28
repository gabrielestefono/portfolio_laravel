import estilo from "./SkillsLeft.module.scss";

export default function SkillsLeft(){
    return(
        <div className={estilo.skillsleft}>
            <h3>Why Hire Me For Your Next <span>Project?</span></h3>
            <p>I’m specialist in UI/UX Designe. My passion is designing & solving problems through user experience and research.</p>
            <button>Hire Me</button>
        </div>
    )
}