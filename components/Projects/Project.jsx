import estilo from "./Project.module.scss";
import Direita from "./Direita";
import Esquerda from "./Esquerda";
export default function Project(){
    return(
        <section className={estilo.projects}>
            <Esquerda/>
            <Direita/>
        </section>
    )
}