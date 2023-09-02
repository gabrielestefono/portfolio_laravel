import FaqQuestion from "./FaqQuestion";
import estilo from "./FaqQuestions.module.scss";

export default function FaqQuestions() {
	return (
		<>
			<FaqQuestion question={1} />
			<FaqQuestion question={0} />
		</>
	)
}