import { Skills } from "@/interfaces/Landing";
import CardsSkillsRight from "./CardsSkillsRight";
import style from "./SkillsRight.module.scss";

export default function SkillsRight(skills: Readonly<Skills>) {
  return (
    <div className={style["SkillsRight"]}>
      {skills.SkillsElements.map((skill) => {
        const { id, image, alt, text, title } = skill;
        return (
          <CardsSkillsRight
            key={id}
            image={image}
            title={title}
            text={text}
            alt={alt}
            id={id}
          />
        );
      })}
    </div>
  );
}
