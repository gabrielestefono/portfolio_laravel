import Link from "next/link";
import estilo from "../../styles/Presentation.module.scss"
import InfoPresentation from "./InfoPresentation";
import TopPresentation from "./TopPresentation";

export default function presentation(){
    return(
        <>
            <TopPresentation/>
            <InfoPresentation/>
        </>
        )
}