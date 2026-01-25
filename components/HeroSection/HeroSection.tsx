import style from "./HeroSection.module.scss";
import { useEffect, useRef, useState } from "react";
import bg1 from "./bg1.webp";
import bg2 from "./bg2.webp";
import bg3 from "./bg3.webp";
import bg4 from "./bg4.webp";
import bg5 from "./bg5.webp";

interface HeroSectionProps {
  text: string;
}

export default function HeroSection({ text }: Readonly<HeroSectionProps>) {
  const divBg = useRef(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const elementoRecebido = divBg.current as unknown as HTMLDivElement;
    const larguraTela = window.innerWidth;

    let backgroundImageSrc = "";

    if (larguraTela <= 768) {
      backgroundImageSrc = bg1.src;
    } else if (larguraTela <= 1024) {
      backgroundImageSrc = bg2.src;
    } else if (larguraTela <= 1280) {
      backgroundImageSrc = bg3.src;
    } else if (larguraTela <= 1440) {
      backgroundImageSrc = bg4.src;
    } else {
      backgroundImageSrc = bg5.src;
    }
    const backgroundImage = new Image();
    backgroundImage.loading = "eager";
    backgroundImage.src = backgroundImageSrc;
    backgroundImage.onload = () => {
      elementoRecebido.style.backgroundImage = `url(${backgroundImageSrc})`;
      setBgLoaded(true);
    };
  }, []);

  return (
    <div className={style["herosection"]} ref={divBg}>
      {bgLoaded && <div>{text}</div>}
    </div>
  );
}
