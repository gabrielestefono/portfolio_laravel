import ContactMeMiddleLeftCard from "./ContactMeMiddleLeftCard";
import email from "./email.png";
import phone from "./phone.png";
import address from "./location.png";

export default function ContactMeMiddleLeft() {
	return (
		<div>
			<ContactMeMiddleLeftCard img={phone} title="Call me" text="+8801613968687"/>
			<ContactMeMiddleLeftCard img={email} title="Email me" text="ahmedtanvir8687@gmail.com"/>
			<ContactMeMiddleLeftCard img={address} title="Address" text="Zakigonj, Sylhet, Bangladesh."/>
		</div>
	)
}