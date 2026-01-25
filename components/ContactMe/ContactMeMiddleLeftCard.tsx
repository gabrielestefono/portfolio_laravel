import Image, { StaticImageData } from "next/image";
import style from "./ContactMeMiddleLeftCard.module.scss";

interface ContactMeMiddleLeftCardProps {
  img: StaticImageData;
  title: string;
  text: string;
  altText: string;
}

export default function ContactMeMiddleLeftCard({
  img,
  text,
  title,
  altText,
}: Readonly<ContactMeMiddleLeftCardProps>) {
  return (
    <div className={style["card"]}>
      <div>
        <div>
          <div>
            <Image
              src={img}
              width={img.width}
              height={img.height}
              alt={altText}
            />
          </div>
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
