import Image from 'next/image';
import estilo from './ContactMeMiddleLeftCard.module.scss';

export default function ContactMeMiddleLeftCard(props) {
	return (
		<div className={estilo.card}>
			<div>
				<div>
					<div>
						<Image src={props.img} width={props.img.width} height={props.img.height} alt={props.altText}/>
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