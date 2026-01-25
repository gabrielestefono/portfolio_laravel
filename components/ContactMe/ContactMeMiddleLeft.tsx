import ContactMeMiddleLeftCard from "./ContactMeMiddleLeftCard";
import email from "./email.png";
import phone from "./phone.png";
import address from "./location.png";
import style from "./ContactMeMiddleLeft.module.scss";

export default function ContactMeMiddleLeft() {
  return (
    <div className={style["contact"]}>
      <ContactMeMiddleLeftCard
        img={phone}
        title="Telefone"
        text="(45) 9-9153-2214"
        altText="Ícone de telefone"
      />
      <ContactMeMiddleLeftCard
        img={email}
        title="Email"
        text="gabrielestefono@hotmail.com"
        altText="Ícone de email"
      />
      <ContactMeMiddleLeftCard
        img={address}
        title="Endereço"
        text="Mal. Cdo. Rondon"
        altText="Ícone de endereço"
      />
    </div>
  );
}
