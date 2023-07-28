import estilo from "./ProjectEsquerda.module.scss";

export default function Esquerda(){
    return(
        <div className={estilo.left}>
            <h2>My Creative Works Latest <span>Projects</span></h2>
            <p>I have selected and mentioned here some of my latest projects to share with you.</p>
            <button>Show More</button>
        </div>
    )
}