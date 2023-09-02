import estilo from './Faq.module.scss';
import FaqQuestions from './FaqQuestions';
import FaqTitle from './FaqTitle';

export default function Faq() {
	return (
		<div className={estilo.faq}>
			<FaqTitle />
			<FaqQuestions />
		</div>
	)
}