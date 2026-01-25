import ContactMeTop from "./ContactMeTop";
import ContactMeMiddle from "./ContactMeMiddle";

interface ContactMeProps {
  espaco?: boolean;
}

export default function ContactMe({ espaco }: Readonly<ContactMeProps>) {
  return (
    <div>
      <ContactMeTop />
      <ContactMeMiddle />
    </div>
  );
}
