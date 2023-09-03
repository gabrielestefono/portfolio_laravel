import estilo from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function header(){
    const {asPath } = useRouter();
    return(
        <>
            <Head>
                <html lang="pt-BR" />
            </Head>
            <div className={estilo.header}>
                <div>
                    <div className={estilo.left}>
                        <a href="/"><img src="./images/logo.svg" alt='Logotipo WebEst' loading="lazy"/></a>
                    </div>
                    <div className={estilo.right}>
                        <Link className={`${estilo.link} ${estilo.active}`} href="/">Início</Link>
                        <Link className={estilo.link} href="/sobre">Sobre mim</Link>
                        <Link className={estilo.link} href="/projetos">Projetos</Link>
                        <Link className={estilo.link} href="/habilidades">Habilidades</Link>
                        <Link className={estilo.link} href="/contato">Contato</Link>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}