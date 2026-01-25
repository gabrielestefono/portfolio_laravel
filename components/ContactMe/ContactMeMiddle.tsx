import ContactMeMiddleLeft from "./ContactMeMiddleLeft";
import ContactMeMiddleRight from "./ContactMeMiddleRight";
import style from "./ContactMeMiddle.module.scss";

export default function ContactMeMiddle() {
  return (
    <div className={style["contact"]}>
      <ContactMeMiddleLeft />
      <ContactMeMiddleRight />
    </div>
  );
}
