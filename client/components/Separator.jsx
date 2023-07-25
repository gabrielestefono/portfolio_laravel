import estilo from "../styles/Separator.module.scss";
export default function Separator(props){
    return (
        <div className={estilo.about}>
            <div className={estilo.titulo}>
                <div className={estilo.separator}>
                    <div className={estilo.left}></div>
                        <div className={estilo.center}>
                            <p>{props.titulo}</p>
                        </div>
                    <div className={estilo.right}></div>
                </div>
            </div>
        </div>
    )
}