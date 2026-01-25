import styles from "./Separator.module.scss";

export default function Separator({ titulo }: Readonly<{ titulo: string }>) {
  return (
    <div className={styles["about"]}>
      <div className={styles["titulo"]}>
        <div className={styles["separator"]}>
          <div className={styles["left"]}></div>
          <div className={styles["center"]}>
            <p>{titulo}</p>
          </div>
          <div className={styles["right"]}></div>
        </div>
      </div>
    </div>
  );
}
