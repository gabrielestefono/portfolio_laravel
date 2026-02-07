import SkillsInnerCard from "./Cards/SkillsInnerCard";
import diamons from "./diamon.webp";
import estilo from "./SkillsInnerContent.module.scss";

export default function SkillsInnerContent() {
  const texto = "Mobile App";
  const alt = "Icone tal";

  return (
    <div className={estilo.content}>
      <div>
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
        <SkillsInnerCard img={diamons} text={texto} alt={alt} />
      </div>
    </div>
  );
}
