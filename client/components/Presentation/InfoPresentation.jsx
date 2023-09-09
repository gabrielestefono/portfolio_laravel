import estilo from "./InfoPresentation.module.scss";

export default function InfoPresentation(){
    return(
        <div className={estilo.infopresentation}>
            <div>
                <div>
                    <div className={`${estilo.primaryIcon} ${estilo.icon1}`}></div>
                    <div className={estilo.text}>
                        <h3>8 years job</h3>
                        <p>Experience</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className={`${estilo.primaryIcon} ${estilo.icon2}`}></div>
                    <div className={estilo.text}>
                        <h3>500+ Projects</h3>
                        <p>Completed</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className={`${estilo.primaryIcon} ${estilo.icon3}`}></div>
                    <div className={estilo.text}>
                        <h3>Online 24/7</h3>
                        <p>Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}