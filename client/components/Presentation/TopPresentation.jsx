import estilo from "./TopPresentation.module.scss";
import Image from "next/image";
import perfil from './perfil.avif';

export default function presentation(){
    return(
        <section className={estilo.presentation}>
            <div className={estilo.center}>
                <div className={estilo.left}>
                    <h1>Olá! Eu sou</h1>
                    <h2>Desenvolvedor Full Stack</h2>
                    <p>Um desenvolvedor full stack é um profissional versátil que possui habilidades tanto no desenvolvimento do lado do cliente (front-end) quanto no lado do servidor (back-end) de aplicações web. Sua capacidade de trabalhar em ambas as áreas os torna ativos valiosos em equipes de desenvolvimento, pois podem abordar uma ampla gama de desafios de programação em um projeto. Eles são como "poliglotas" da programação, dominando várias linguagens e tecnologias para criar aplicativos web completos e funcionais.</p>
                    <a href="/projetos"><button>Veja meus projetos</button></a>
                </div>
                <div className={estilo.right}>
                    <div className={estilo.ball1}></div>
                    <div className={estilo.ball2}></div>
                    <div className={estilo.ball3}></div>
                    <div className={estilo.image}>
                        <Image src={perfil}
                            className={estilo.img}
                            alt="Programador" width={510}
                            height={486}
                            sizes="(min-width: 768px) 308px, (min-width: 1280px) 439px, (min-width: 1280px) 510px, 510px"
                        />
                    </div>
                </div>
            </div>
        </section>
        )
}