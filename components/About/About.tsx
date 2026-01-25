import Image from "next/image";
import styles from "./About.module.scss";
import ItemList from "./ItemsList";

export default function About() {
  const downloadCurriculum = () => {
    const link = document.createElement("a");
    link.href = "/curriculos/curriculo.pdf";
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles["about"]} id="sobre">
      <div>
        <div className={styles["container"]}>
          <div className={styles["left"]}>
            <div className={styles["title"]}>
              <h3>Olá!</h3>
              <h3>Meu nome é Gabriel Estéfono.</h3>
            </div>
            <div className={styles["list"]}>
              <ItemList texto="Desenvolvedor Full-Stack" />
              <ItemList texto="Desenvolvedor Front-end" />
              <ItemList texto="Desenvolvedor Back-end" />
              <ItemList texto="Desenvolvedor Mobile" />
            </div>
            <div className={styles["buttons"]}>
              <button className={styles["first"]} onClick={downloadCurriculum}>
                Baixar currículo
              </button>
              {/* <Link href="/sobre" className={styles['second']}>Leia mais</Link> */}
            </div>
          </div>
          <div className={styles["right"]}>
            <Image
              src="/images/ilustracao.png"
              alt="Ilustração minha de cabelo cumprido"
              width={536}
              height={435}
              sizes="(max-width: 767px) 360px, 536px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
