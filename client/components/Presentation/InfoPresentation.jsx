import estilo from "./InfoPresentation.module.scss";

export default function InfoPresentation(){
    return(
        <div className={estilo.infopresentation}>
            <div>
                <div>
                    <div className={`${estilo.primaryIcon} ${estilo.icon1}`}></div>
                    <div className={estilo.text}>
                        <h3>2 anos</h3>
                        <p>Experiência</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className={`${estilo.primaryIcon} ${estilo.icon2}`}></div>
                    <div className={estilo.text}>
                        <h3>60+ Projetos</h3>
                        <p>Completos</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className={`${estilo.primaryIcon} ${estilo.icon3}`}></div>
                    <div className={estilo.text}>
                        <h3>Disponível</h3>
                        <p>Suporte</p>
                    </div>
                </div>
            </div>
        </div>
    )
}