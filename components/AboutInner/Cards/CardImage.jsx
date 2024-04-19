import estilo from './CardImage.module.scss';
import Image from 'next/image';

export default function CardImage(props) {
	return (
		<div className={estilo.cardimage}>
			<Image className={estilo.image} src={props.image} width={props.image.width} height={props.image.height} alt=''/>
		</div>
	)
}