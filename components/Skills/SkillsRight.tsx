import { Skills } from "@/types";
import CardsSkillsRight from "./CardsSkillsRight";
import estilo from "./SkillsRight.module.scss";

export default function SkillsRight(skills: Readonly<Skills>) {
  return (
    <div className={estilo.SkillsRight}>
      {skills.SkillsElements.map((skill) => (
        <CardsSkillsRight
          key={skill.id}
          image={skill.image}
          title={skill.title}
          text={skill.text}
          alt={skill.alt}
          id={skill.id}
        />
      ))}
    </div>
  );
}
