import estilo from "./CardsSkillsRight.module.scss";

export default function CardsSkillsRight(props) {
    console.log(props.imagem)
    return(
        <div className={estilo.background}>
            <div><img src={props.imagem.src}/></div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}