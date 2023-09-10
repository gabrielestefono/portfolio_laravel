import ContactMeMiddleLeftCard from "./ContactMeMiddleLeftCard";
import email from "./email.png";
import phone from "./phone.png";
import address from "./location.png";
import estilo from "./ContactMeMiddleLeft.module.scss";

export default function ContactMeMiddleLeft() {
	return (
		<div className={estilo.contact}>
			<ContactMeMiddleLeftCard img={phone} title="Telefone" text="(45) 9-9153-2214	"/>
			<ContactMeMiddleLeftCard img={email} title="Email" text="gabrielestefono@hotmail.com"/>
			<ContactMeMiddleLeftCard img={address} title="Endereço" text="Mal. Cdo. Rondon"/>
		</div>
	)
}