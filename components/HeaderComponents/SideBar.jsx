import estilo from './SideBar.module.scss';
import Link from 'next/link';

export default function SideBar(props) { 
	return (
		<>
			<div className={estilo.sidebar}>
				<Link className={`${estilo.link} ${props.rotaAtual == "/" ? estilo.active : ""}`} href="/">Início</Link>
				<Link className={`${estilo.link} ${props.rotaAtual == "/sobre" ? estilo.active : ""}`} href="/sobre">Sobre mim</Link>
				<Link className={`${estilo.link} ${props.rotaAtual == "/projetos" ? estilo.active : ""}`} href="/projetos">Projetos</Link>
				<Link className={`${estilo.link} ${props.rotaAtual == "/habilidades" ? estilo.active : ""}`} href="/habilidades">Habilidades</Link>
				<Link className={`${estilo.link} ${props.rotaAtual == "/contato" ? estilo.active : ""}`} href="/contato">Contato</Link>
			</div>
		</>
	)
}