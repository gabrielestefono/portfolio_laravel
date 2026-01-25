import styles from "./TopPresentation.module.scss";
import Image from "next/image";
import { PresentationTop } from "@/interfaces/Landing";
import Link from "next/link";

export default function presentation({
  presentationTop,
}: Readonly<{ presentationTop: PresentationTop }>) {
  const { greating, profession, description } = presentationTop;
  return (
    <section className={styles["presentation"]}>
      <div className={styles["center"]}>
        <div className={styles["left"]}>
          <h1>{greating}</h1>
          <h2>{profession}</h2>
          {description.map((desc) => (
            <p key={String(desc.id)}>{desc.text}</p>
          ))}
          <Link href="/#projetos" rel="noopener noreferrer">
            Veja meus projetos
          </Link>
        </div>
        <div className={styles["right"]}>
          <div className={styles["ball1"]}></div>
          <div className={styles["ball2"]}></div>
          <div className={styles["ball3"]}></div>
          <div className={styles["image"]}>
            <div className={styles["image"]}>
              <Image
                className={styles["img"]}
                src="/images/profile.png"
                alt="Foto de perfil"
                width={504}
                height={495}
                sizes="(max-width: 767px) 88px, (min-width: 768px) and (max-width: 1279px) 309px, (min-width: 1280px) and (max-width: 1440px) 440px, 510px"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
