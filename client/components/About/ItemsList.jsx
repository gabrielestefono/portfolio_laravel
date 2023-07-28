import estilo from "./ItemList.module.scss";

export default function ItemList(props){
    return(
        <div className={estilo.itemList}>
            <div></div>
            <p>{props.texto}</p>
        </div>
    )
}