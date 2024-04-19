import estilo from './CardInfo.module.scss';

export default function CardInfo(props) {
	return (
		<div className={estilo.cardinfo}>
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	)
}