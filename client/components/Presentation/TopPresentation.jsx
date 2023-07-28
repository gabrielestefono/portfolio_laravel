import Link from "next/link";
import estilo from "./TopPresentation.module.scss";

export default function presentation(){
    return(
        <section className={estilo.presentation}>
            <div className={estilo.center}>
                <div className={estilo.left}>
                    <h1>Hi, I'm</h1>
                    <h2>Full Stack Developer</h2>
                    <p>Full stack developers possess a wide range of skills and can work on both the client-side (front-end) and server-side (back-end) of web applications. This versatility makes them valuable assets in a development team.</p>
                    <a href="/projetos"><button>View My Projects</button></a>
                </div>
                <div className={estilo.right}>
                    <div className={estilo.ball1}></div>
                    <div className={estilo.ball2}></div>
                    <div className={estilo.ball3}></div>
                    <div className={estilo.image}>
                        <img src="/images/perfil.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        )
}