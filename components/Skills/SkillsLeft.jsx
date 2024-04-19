import estilo from "./SkillsLeft.module.scss";

export default function SkillsLeft(){
    return(
        <div className={estilo.skillsleft}>
            <h3>Porque me contratar para o seu próximo <span>Projeto?</span></h3>
            <p>Sou desenvolvedor web. Minha paixão é criar soluções e solucionar problemas por meio da programação.</p>
            <button onClick={() => window.location.href = "/contrate-me"}>Contrate-me</button>
        </div>
    )
}
