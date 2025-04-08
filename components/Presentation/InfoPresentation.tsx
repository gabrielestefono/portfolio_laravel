import { PresentationBottom } from "@/types";
import styles from "./InfoPresentation.module.scss";

export default function InfoPresentation({
  initialDate,
  projects,
  support,
}: Readonly<PresentationBottom>) {
  const today = new Date();
  const initialDateObj = new Date(initialDate);
  const dateDiff = today.getFullYear() - initialDateObj.getFullYear();
  return (
    <div className={styles.infopresentation}>
      <div>
        <div>
          <div className={`${styles.primaryIcon} ${styles.icon1}`}></div>
          <div className={styles.text}>
            <h3>
              {dateDiff} {dateDiff > 0 ? "anos" : "ano"}
            </h3>
            <p>Experiência</p>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <div className={`${styles.primaryIcon} ${styles.icon2}`}></div>
          <div className={styles.text}>
            <h3>{projects}+ Projetos</h3>
            <p>Completos</p>
          </div>
        </div>
      </div> */}
      {/* <div>
        <div>
          <div className={`${styles.primaryIcon} ${styles.icon3}`}></div>
          <div className={styles.text}>
            <h3>{support}</h3>
            <p>Suporte</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
