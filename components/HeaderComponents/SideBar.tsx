import styles from "./SideBar.module.scss";
import Link from "next/link";

interface SideBarProps {
  rotaAtual: string;
  blog?: boolean;
  estudeComigo?: boolean;
}

export default function SideBar({
  rotaAtual,
  blog = false,
}: Readonly<SideBarProps>) {
  return (
    <div className={styles["sidebar"]}>
      <Link
        className={`${styles["link"]} ${rotaAtual == "/" ? styles["active"] : ""}`}
        href="/"
      >
        Início
      </Link>
      <Link
        className={`${styles["link"]} ${
          rotaAtual == "/sobre" ? styles["active"] : ""
        }`}
        href="/#sobre"
      >
        Sobre mim
      </Link>
      <Link
        className={`${styles["link"]} ${
          rotaAtual == "/projetos" ? styles["active"] : ""
        }`}
        href="/#projetos"
      >
        Projetos
      </Link>
      <Link
        className={`${styles["link"]} ${
          rotaAtual == "/habilidades" ? styles["active"] : ""
        }`}
        href="/#habilidades"
      >
        Habilidades
      </Link>
      <Link
        className={`${styles["link"]} ${
          rotaAtual == "/contato" ? styles["active"] : ""
        }`}
        href="/#contato"
      >
        Contato
      </Link>
      <Link
        className={`${styles["link"]} ${blog ? styles["active"] : ""}`}
        href="/blog"
      >
        Blog
      </Link>
    </div>
  );
}
