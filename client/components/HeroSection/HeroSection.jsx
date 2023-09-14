import estilo from "./HeroSection.module.scss";
import { useEffect, useRef, useState } from "react";
import bg1 from "./bg1.webp";
import bg2 from "./bg2.webp";
import bg3 from "./bg3.webp";
import bg4 from "./bg4.webp";
import bg5 from "./bg5.webp";

export default function HeroSection(props) {
  const divBg = useRef(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const elementoRecebido = divBg.current;
    const larguraTela = window.innerWidth;

    // Determine qual imagem de fundo carregar com base na largura da tela
    let backgroundImageSrc = "";

    if (larguraTela <= 768) {
      backgroundImageSrc = bg1.src; // Use bg1.src para obter o src correto da imagem
    } else if (larguraTela <= 1024) {
      backgroundImageSrc = bg2.src; // Use bg2.src para obter o src correto da imagem
    } else if (larguraTela <= 1280) {
      backgroundImageSrc = bg3.src; // Use bg3.src para obter o src correto da imagem
    } else if (larguraTela <= 1440) {
      backgroundImageSrc = bg4.src; // Use bg4.src para obter o src correto da imagem
    } else {
      backgroundImageSrc = bg5.src; // Use bg5.src para obter o src correto da imagem
    }

    // Cria uma nova imagem
    const backgroundImage = new Image();

    // Define o atributo loading para "eager" para carregar com prioridade
    backgroundImage.loading = "eager";

    // Define o src da imagem
    backgroundImage.src = backgroundImageSrc;

    // Aplica a imagem de fundo após o carregamento
    backgroundImage.onload = () => {
      elementoRecebido.style.backgroundImage = `url(${backgroundImageSrc})`;
      setBgLoaded(true);
    };
  }, []);

  return (
    <div className={estilo.herosection} ref={divBg}>
      {bgLoaded && <div>{props.text}</div>}
    </div>
  );
}
