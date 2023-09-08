import estilo from './ContactMeBottom.module.scss'

export default function ContactMeBottom(props) {
	return (
		<div className={estilo.bottom}>
			<button className={props.espaco ? estilo.espaco : ''}>Submit Message</button>
		</div>
	)
}