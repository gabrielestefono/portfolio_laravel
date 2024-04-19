import ContactMe from "@/components/ContactMe/ContactMe";
import HeroSection from "@/components/HeroSection/HeroSection";
import Separator from "@/components/Separator";

export default function contato(){
    return(
        <>
            <HeroSection text="Contato" />   
            <Separator titulo="Contate-me"/>
            <ContactMe espaco={true}/>
        </>
    )
}