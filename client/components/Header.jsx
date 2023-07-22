import estilo from '../styles/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function header(){
    const {asPath } = useRouter();
    return(
        <>
            <div className={estilo.header}>
                <div>
                    <div className={estilo.left}>
                        <a href="/"><img src="./images/logo.png"/></a>
                    </div>
                    <div className={estilo.right}>
                        <Link className={`${estilo.link} ${estilo.active}`} href="/">Início</Link>
                        <Link className={estilo.link} href="/sobre">Sobre mim</Link>
                        <Link className={estilo.link} href="/projetos">Projetos</Link>
                        <Link className={estilo.link} href="/habilidades">Habilidades</Link>
                        <Link className={estilo.link} href="/contato">Contato</Link>
                    </div>
                </div>
            </div>
        </>
    )
}