import estilo from "./FaqQuestion.module.scss";
import icon from "./icon.png";
import close from "./close.png";
import Image from "next/image";

export default function FaqQuestion(props) {
	let resposta;
	if (props.question === 1) {
		resposta = (
			<div className={estilo.closedQuestion}>
				<h2>LOREM IPSUM</h2>
				<div>
					<Image src={icon} width={icon.width} height={icon.height} alt="Ícone mostrar"/>
				</div>
			</div>
		)
	} else {
		resposta = (
			<div className={estilo.openedQuestion}>
				<div>
					<h2>LOREM IPSUM</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas.</p>
				</div>
				<div>
					<div>
						<Image src={close} width={close.width} height={close.height} alt="Ícone fechar"/>
					</div>
				</div>
			</div>
		)
	}
	return resposta;
}