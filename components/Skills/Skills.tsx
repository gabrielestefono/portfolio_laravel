import SkillsLeft from "./SkillsLeft";
import SkillsRight from "./SkillsRight";
import estilo from "./Skills.module.scss";
import { Skills as SkillProps } from "@/interfaces/Landing";

export default function Skills({ skills }: Readonly<{ skills: SkillProps }>) {
  const { SkillsElements } = skills;
  return (
    <div className={estilo.skills} id="habilidades">
      <div>
        <SkillsLeft />
        <SkillsRight SkillsElements={SkillsElements} />
      </div>
    </div>
  );
}
