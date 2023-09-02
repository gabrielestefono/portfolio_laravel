import estilo from "./FaqQuestion.module.scss";

export default function FaqQuestion(props) {
	let resposta;
	if (props.question === 1) {
		resposta = (
			<div>
				<h2>LOREM IPSUM</h2>
			</div>
		)
	} else {
		resposta = (
			<div>
				<h2>LOREM IPSUM</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas.</p>
			</div>
		)
	}
	return resposta;
}