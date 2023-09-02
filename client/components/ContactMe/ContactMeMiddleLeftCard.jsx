import estilo from './ContactMeMiddleLeftCard.module.scss';

export default function ContactMeMiddleLeftCard(props) {
	return (
		<div className={estilo.card}>
			<div>
				<div>
					<div>
						<img src={props.img.src}/>
					</div>
				</div>
			</div>
			<div>
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</div>
		</div>
	)
}