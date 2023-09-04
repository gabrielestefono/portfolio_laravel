import estilo from './Header.module.scss';
import Link from 'next/link';
import imagem from '../public/images/logo.avif';
import Head from 'next/head';
import { useState } from 'react';
import SideBar from './HeaderComponents/SideBar';
import { useRouter } from 'next/router';

export default function header() {
    const rotaAtual = useRouter();

    const [clicked, setClicked] = useState(false);

    const handleSideBar = () => {
        setClicked(!clicked);
    }
    return(
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Confira o portfólio de desenvolvedor da Webest para explorar projetos inovadores, experiência em desenvolvimento web e habilidades técnicas. Descubra como podemos transformar suas ideias em realidade!"/>
                <meta name="keywords" content="desenvolvedor, desenvolvimento web, portfólio, Webest, projetos web"/>
                <meta name="author" content="Gabriel Estéfono"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="content-language" content="pt-BR"/>
                <meta property="og:title" content="Portfólio de Desenvolvedor - Webest"/>
                <meta property="og:description" content="Confira o portfólio de desenvolvedor da Webest para explorar projetos inovadores, experiência em desenvolvimento web e habilidades técnicas. Descubra como podemos transformar suas ideias em realidade!"/>
                <meta property="og:image" content={imagem.src}/>
                <meta property="og:image:alt" content="Webest Portfólio"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.gabrielestefono.com.br/"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Portfólio de Desenvolvedor - Webest"/>
                <meta name="twitter:description" content="Confira o portfólio de desenvolvedor da Webest para explorar projetos inovadores, experiência em desenvolvimento web e habilidades técnicas. Descubra como podemos transformar suas ideias em realidade!"/>
                <meta name="twitter:image" content={imagem.src} />
                <title>WeBest - Página Inicial</title>
            </Head>
            <div className={estilo.header}>
                <div>
                    <div className={estilo.left}>
                        <a href="/"><img src={imagem.src} alt='Logotipo WeBest' width={132} height={61}/></a>
                    </div>
                    <div className={estilo.right}>
                        <Link className={`${estilo.link} ${rotaAtual.pathname == "/" ? estilo.active : ""}`} href="/">Início</Link>
                        <Link className={`${estilo.link} ${rotaAtual.pathname == "/sobre" ? estilo.active : ""}`} href="/sobre">Sobre mim</Link>
                        <Link className={`${estilo.link} ${rotaAtual.pathname == "/projetos" ? estilo.active : ""}`} href="/projetos">Projetos</Link>
                        <Link className={`${estilo.link} ${rotaAtual.pathname == "/habilidades" ? estilo.active : ""}`} href="/habilidades">Habilidades</Link>
                        <Link className={`${estilo.link} ${rotaAtual.pathname == "/contato" ? estilo.active : ""}`} href="/contato">Contato</Link>
                        <div onClick={handleSideBar}>
                            {clicked ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 4.75l14.5 14.5M19.25 4.75L4.75 19.25" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {clicked ?
                (
                    <>
                        <SideBar rotaAtual={rotaAtual.pathname} />
                    </>
                ) : (
                    <>
                    </>
                )}
        </>
    )
}