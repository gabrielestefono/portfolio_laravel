import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mapa de Conhecimento
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Explore tópicos interativos e navegue por fluxogramas de conhecimento
          para descobrir conteúdos relacionados
        </p>
      </div>
    </header>
  );
}
