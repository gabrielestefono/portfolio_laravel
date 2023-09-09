import HeroSection from "@/components/HeroSection/HeroSection";
import Separator from "@/components/Separator";
import SkillsInnerContent from "@/components/SkillsInner/SkillsInnerContent";
import SkillTitle from "@/components/SkillsInner/SkillsTitle";

export default function contato(){
    return(
        <>
            <HeroSection text="Skills" />
            <Separator titulo="My Skills" />
            <SkillTitle/>
            <SkillsInnerContent/>
        </>
    )
}