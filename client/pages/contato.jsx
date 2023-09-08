import ContactMe from "@/components/ContactMe/ContactMe";
import HeroSection from "@/components/HeroSection/HeroSection";
import Separator from "@/components/Separator";

export default function contato(){
    return(
        <>
            <HeroSection text="Contact" />   
            <Separator titulo="Contact me"/>
            <ContactMe espaco={true}/>
        </>
    )
}