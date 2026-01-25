import Image from "next/image";
import style from "./CardsSkillsRight.module.scss";
import { SkillsElement } from "@/interfaces/Landing";

export default function CardsSkillsRight({
  alt,
  id,
  image,
  text,
  title,
}: Readonly<SkillsElement>) {
  return (
    <div className={style["background"]}>
      <div>
        <Image src={image} width={50} height={50} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
