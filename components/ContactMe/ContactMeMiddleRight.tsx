import { FormEventHandler, useState } from "react";
import style from "./ContactMeMiddleRight.module.scss";

export default function ContactMeMiddleRight() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [budget, setBudget] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorWhatsapp, setErrorWhatsapp] = useState(false);

  const handleInputName: FormEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if (value.length > 0) {
      setErrorName(false);
    }
    setName(value);
  };

  const handleInputEmail: FormEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if (value.length > 0) {
      setErrorEmail(false);
    }
    setEmail(value);
  };

  const handleInputMessage: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const target = e.target as HTMLTextAreaElement;
    const value = target.value;
    if (value.length > 0) {
      setErrorMessage(false);
    }
    setMessage(value);
  };

  const handleInputWhatsapp: FormEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if (value.length > 0) {
      setErrorWhatsapp(false);
    }
    setWhatsapp(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };
    if (!name) {
      setErrorName(true);
      return;
    }
    if (!email || !validateEmail(email)) {
      setErrorName(false);
      setErrorEmail(true);
      return;
    }
    if (!message) {
      setErrorEmail(false);
      setErrorMessage(true);
      return;
    }
    if (!whatsapp) {
      setErrorMessage(false);
      setErrorWhatsapp(true);
      return;
    }
    setErrorEmail(false);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, whatsapp, budget }),
    });
    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
      setWhatsapp("");
      setBudget("");
    } else {
      alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    }
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onInput={handleInputName}
            className={errorName ? style["errorInput"] : ""}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onInput={handleInputWhatsapp}
            className={errorWhatsapp ? style["errorInput"] : ""}
          />
        </div>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onInput={handleInputEmail}
            className={errorEmail ? style["errorInput"] : ""}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Orçamento em R$"
            value={budget}
            onInput={(e) => setBudget(e.currentTarget.value)}
          />
        </div>
      </div>
      <div>
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Mensagem"
          value={message}
          onInput={handleInputMessage}
          className={errorMessage ? style["errorInput"] : ""}
        ></textarea>
      </div>
      <div className={style["bottom"]}>
        <button className={style["espaco"]}>Submit Message</button>
      </div>
    </form>
  );
}
