import Separator from "../Separator";
import estilo from "../../styles/About.module.scss";

export default function About(){
    return (
        <>
            <div className={estilo.about}>
                <div className={estilo.titulo}>
                    <Separator titulo="About Me"/>
                </div>
            </div>
        </>
    )
}