import SkillsLeft from "./SkillsLeft";
import SkillsRight from "./SkillsRight";
import estilo from "./Skills.module.scss";
import { Skills as SkillProps } from "@/types";

export default function Skills({ SkillsElements }: Readonly<SkillProps>) {
  return (
    <div className={estilo.skills} id="skills">
      <SkillsLeft />
      <SkillsRight SkillsElements={SkillsElements} />
    </div>
  );
}
