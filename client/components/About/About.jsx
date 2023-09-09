import estilo from "./About.module.scss";
import ItemList from "./ItemsList";

export default function About(){
    return (
        <section className={estilo.about}>
            <div className={estilo.container}>
                <div className={estilo.left}>
                    <div className={estilo.title}>
                        <h3>Olá!</h3>
                        <h3>Meu nome é Gabriel Estéfono.</h3>
                    </div>
                    <div className={estilo.list}>
                        <ItemList texto="Desenvolvedor Full-Stack"/>
                        <ItemList texto="Desenvolvedor Front-end"/>
                        <ItemList texto="Desenvolvedor Back-end"/>
                        <ItemList texto="HTML, CSS"/>
                        <ItemList texto="JavaScript"/>
                    </div>
                    <div className={estilo.buttons}>
                        <button className={estilo.first}>Baixar currículo</button>
                        <a href="/sobre"><button className={estilo.second}>Leia mais</button></a>
                    </div>
                </div>
                <div className={estilo.right}>
                    <img src="/images/illustrative1.png"/>
                </div>
            </div>
        </section>
    )
}