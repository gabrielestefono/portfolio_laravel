import styles from "./TopPresentation.module.scss";
import Image from "next/image";
import { PresentationTop } from "@/types";

export default function presentation({
  greating,
  profession,
  description,
}: Readonly<PresentationTop>) {
  return (
    <section className={styles.presentation}>
      <div className={styles.center}>
        <div className={styles.left}>
          <h1>{greating}</h1>
          <h2>{profession}</h2>
          {description.map((desc) => (
            <p key={String(desc.id)}>{desc.text}</p>
          ))}
          <a
            href="https://github.com/gabrielestefono?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Veja meus projetos</button>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.ball1}></div>
          <div className={styles.ball2}></div>
          <div className={styles.ball3}></div>
          <div className={styles.image}>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src="/images/profile.png"
                alt="Foto de perfil"
                width={510}
                height={486}
                sizes="(max-width: 767px) 154px, (min-width: 768px) and (max-width: 1279px) 300px, (min-width: 1280px) and (max-width: 1440px) 508px, 907px"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
