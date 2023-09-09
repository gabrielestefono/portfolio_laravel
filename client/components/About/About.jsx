import estilo from "./About.module.scss";
import ItemList from "./ItemsList";

export default function About(){
    return (
        <section className={estilo.about}>
            <div className={estilo.container}>
                <div className={estilo.left}>
                    <div className={estilo.title}>
                        <h3>Hello!</h3>
                        <h3>My name is Gabriel Estefono.</h3>
                    </div>
                    <div className={estilo.list}>
                        <ItemList texto="Full Stack Developer"/>
                        <ItemList texto="Front-end Developer"/>
                        <ItemList texto="Back-end Developer"/>
                        <ItemList texto="HTML, CSS"/>
                        <ItemList texto="JavaScript"/>
                    </div>
                    <div className={estilo.buttons}>
                        <button className={estilo.first}>Download My Resume</button>
                        <a href="/sobre"><button className={estilo.second}>Read More</button></a>
                    </div>
                </div>
                {/* <div className={estilo.right}>
                    <img src="/images/illustrative1.png"/>
                </div> */}
            </div>
        </section>
    )
}