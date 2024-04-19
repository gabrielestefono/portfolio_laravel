import Header from "./Header";
import Footer from "./Footer";
import Temporario from "./Temporario";

export default function Home({children}) {
    return (
      <>
        <Temporario/>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
      </>
    )
  }
