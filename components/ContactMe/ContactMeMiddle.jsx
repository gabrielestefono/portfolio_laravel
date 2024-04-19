import ContactMeMiddleLeft from "./ContactMeMiddleLeft";
import ContactMeMiddleRight from "./ContactMeMiddleRight";
import estilo from "./ContactMeMiddle.module.scss";

export default function ContactMeMiddle() {
	return (
		<div className={estilo.contact}>
			<ContactMeMiddleLeft />
			<ContactMeMiddleRight />
		</div>
	)
}