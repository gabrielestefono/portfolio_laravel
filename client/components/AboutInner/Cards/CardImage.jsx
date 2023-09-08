import estilo from './CardImage.module.scss';
import Image from 'next/image';

export default function CardImage(props) {
	return (
		<div className={estilo.cardimage}>
			<Image src={props.image} layout="fill" objectFit='cover'/>
		</div>
	)
}