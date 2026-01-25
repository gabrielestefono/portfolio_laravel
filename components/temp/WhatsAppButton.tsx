import React from "react";
import styles from "./WhatsAppButton.module.scss";
import Link from "next/link";

const WhatsAppButton = () => {
  const whatsappNumber = "5545991532214";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappLink}
      className={styles["button"]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Converse conosco no WhatsApp"
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles["icon"]}
        viewBox="0 0 32 32"
      >
        <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.354.615 4.646 1.783 6.667L2.667 29.333l6.805-1.782c1.99 1.058 4.226 1.616 6.53 1.616 7.364 0 13.333-5.97 13.333-13.333S23.365 2.667 16.001 2.667zm0 24c-1.99 0-3.937-.52-5.648-1.5l-.405-.23-4.04 1.06 1.083-3.948-.25-.406a10.56 10.56 0 01-1.595-5.583c0-5.842 4.76-10.584 10.584-10.584 5.823 0 10.584 4.742 10.584 10.584 0 5.824-4.761 10.584-10.584 10.584zm5.52-7.813c-.302-.151-1.785-.883-2.063-.984-.276-.1-.478-.151-.678.151-.198.302-.778.984-.954 1.187-.175.2-.351.226-.65.075-.302-.151-1.274-.469-2.426-1.495-.896-.798-1.5-1.78-1.674-2.08-.175-.302-.018-.465.132-.616.135-.135.302-.351.453-.527.151-.176.2-.302.302-.503.1-.2.05-.377-.025-.528-.075-.15-.678-1.638-.928-2.245-.245-.593-.494-.511-.678-.521l-.576-.01c-.2 0-.528.075-.805.377s-1.06 1.036-1.06 2.528 1.087 2.933 1.237 3.135c.151.2 2.139 3.266 5.18 4.58.724.312 1.29.498 1.732.638.728.232 1.39.2 1.913.121.584-.087 1.785-.728 2.037-1.43.252-.703.252-1.303.176-1.43-.075-.127-.276-.2-.577-.351z" />
      </svg>
    </Link>
  );
};

export default WhatsAppButton;
