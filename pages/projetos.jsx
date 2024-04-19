import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsContent from "@/components/ProjectsInner/ProjectsContent";
import ProjectsTitle from "@/components/ProjectsInner/ProjectsTitle";
import Separator from "@/components/Separator";

export default function contato(){
    const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan." 
    return(
        <>
            <HeroSection text="Projects"/>
            <Separator titulo="Projects"/>
            <ProjectsTitle text={text}/>
            <ProjectsContent/>
        </>
    )
}