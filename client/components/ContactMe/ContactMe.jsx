import ContactMeTop from "./ContactMeTop";
import ContactMeMiddle from "./ContactMeMiddle";
import ContactMeBottom from "./ContactMeBottom";

export default function ContactMe(props) {
	return (
		<div>
			<ContactMeTop/>
			<ContactMeMiddle />
			{props.espaco ? <ContactMeBottom espaco={true}/> : <ContactMeBottom/>}
		</div>
	)
}