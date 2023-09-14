import estilo from "./HeroSection.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'; // Importa o componente Image do Next.js

export default function HeroSection(props) {
  const divBg = useRef(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const elementoRecebido = divBg.current;
    const larguraTela = window.innerWidth;

    // Determine qual imagem de fundo carregar com base na largura da tela
    let backgroundImageSrc = "";

    if (larguraTela <= 768) {
      backgroundImageSrc = "/bg1.webp"; // Caminho relativo da imagem
    } else if (larguraTela <= 1024) {
      backgroundImageSrc = "/bg2.webp";
    } else if (larguraTela <= 1280) {
      backgroundImageSrc = "/bg3.webp";
    } else if (larguraTela <= 1440) {
      backgroundImageSrc = "/bg4.webp";
    } else {
      backgroundImageSrc = "/bg5.webp";
    }

    // Aplica a imagem de fundo
    elementoRecebido.style.backgroundImage = `url(${backgroundImageSrc})`;
    setBgLoaded(true);
  }, []);

  return (
    <div className={estilo.herosection} ref={divBg}>
      {bgLoaded && <div>{props.text}</div>}
      {/* Usa a tag <Image> do Next.js para carregar a imagem otimizada */}
      {bgLoaded && <Image src={bgLoaded} alt="Imagem de fundo" width={1920} height={1080} />}
    </div>
  );
}
