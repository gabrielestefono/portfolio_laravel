'use client"';

import { PresentationBottom } from "@/interfaces/Landing";
import styles from "./InfoPresentation.module.scss";

export default function InfoPresentation({
  presentationBottom,
}: Readonly<{ presentationBottom: PresentationBottom }>) {
  const { initialDate, projects, support } = presentationBottom;
  const yearText = initialDate > 1 ? "anos" : "ano";
  return (
    <div className={styles.infopresentation}>
      <div>
        <div>
          <div className={`${styles.primaryIcon} ${styles.icon1}`}></div>
          <div className={styles.text}>
            <h3>
              {initialDate} {yearText}
            </h3>
            <p>Experiência</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={`${styles.primaryIcon} ${styles.icon2}`}></div>
          <div className={styles.text}>
            <h3>{projects}+ Projetos</h3>
            <p>Completos</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={`${styles.primaryIcon} ${styles.icon3}`}></div>
          <div className={styles.text}>
            <h3>{support}</h3>
            <p>Suporte</p>
          </div>
        </div>
      </div>
    </div>
  );
}
