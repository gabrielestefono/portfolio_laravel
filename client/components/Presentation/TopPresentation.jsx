import estilo from "./TopPresentation.module.scss";
import perfilSmaller from './perfil_smaller.webp';
import perfilSmall from './perfil_small.webp';
import perfilMedium from './perfil_medium.webp';
import perfilLarge from './perfil_large.webp';

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
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                srcSet={perfilSmaller.src}
                            />
                            <source
                                media="(min-width: 768px) and (max-width: 1023px)"
                                srcSet={perfilSmall.src}
                            />
                            <source
                                media="(min-width: 1024px) and (max-width: 1279px)"
                                srcSet={perfilMedium.src}
                            />
                            <source
                                media="(min-width: 1280px)"
                                srcSet={perfilLarge.src}
                            />
                            <img
                                src={perfilLarge.src}
                                className={estilo.img}
                                alt="Imagem do programador do site"
                            />
                        </picture>

                    </div>
                </div>
            </div>
        </section>
        )
}