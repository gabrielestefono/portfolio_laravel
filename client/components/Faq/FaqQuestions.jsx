import FaqQuestion from "./FaqQuestion";
import estilo from "./FaqQuestions.module.scss";

export default function FaqQuestions() {
	return (
		<div className={estilo.questions}>
			<FaqQuestion question={1}/>
			<FaqQuestion question={1}/>
			<FaqQuestion question={1}/>
			<FaqQuestion question={1}/>
			<FaqQuestion question={0}/>
		</div>
	)
}