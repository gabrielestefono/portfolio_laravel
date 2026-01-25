import SkillsLeft from "./SkillsLeft";
import SkillsRight from "./SkillsRight";
import style from "./Skills.module.scss";
import { Skills as SkillProps } from "@/interfaces/Landing";

export default function Skills({ skills }: Readonly<{ skills: SkillProps }>) {
  const { SkillsElements } = skills;
  return (
    <div className={style["skills"]} id="habilidades">
      <div>
        <SkillsLeft />
        <SkillsRight SkillsElements={SkillsElements} />
      </div>
    </div>
  );
}
