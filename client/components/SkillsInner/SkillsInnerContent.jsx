import SkillsInnerCard from "./Cards/SkillsInnerCard";
import diamons from "./diamon.webp";
import estilo from "./SkillsInnerContent.module.scss";

export default function SkillsInnerContent() {
	let texto = "Mobile App";
	return (
		<div className={estilo.content}>
			<div>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
				<SkillsInnerCard img={diamons} text={texto}/>
			</div>
		</div>
	)
}