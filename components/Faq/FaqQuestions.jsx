import FaqQuestion from "./FaqQuestion";
import estilo from "./FaqQuestions.module.scss";

export default function FaqQuestions() {
	return (
		<div className={estilo.questions}>
			<FaqQuestion/>
			<FaqQuestion/>
			<FaqQuestion/>
			<FaqQuestion/>
			<FaqQuestion/>
		</div>
	)
}
