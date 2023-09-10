import estilo from "./ProjectEsquerda.module.scss";

export default function Esquerda(){
    return(
        <div className={estilo.left}>
            <h2>Meus últimos <span>Projetos</span></h2>
            <p>Eu selecionei alguns dos meus ultimos trabalhos para compartilhar com você.</p>
            <button>Mostrar mais</button>
        </div>
    )
}