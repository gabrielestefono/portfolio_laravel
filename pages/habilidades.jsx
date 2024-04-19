import HeroSection from "@/components/HeroSection/HeroSection";
import Separator from "@/components/Separator";
import SkillsInnerContent from "@/components/SkillsInner/SkillsInnerContent";
import SkillTitle from "@/components/SkillsInner/SkillsTitle";

export default function contato(){
    return(
        <>
            <HeroSection text="Habilidades"/>
            <Separator titulo="Minhas Habilidades"/>
            <SkillTitle/>
            <SkillsInnerContent/>
        </>
    )
}