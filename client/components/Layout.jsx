import Header from "./Header";
import Footer from "./Footer";

export default function Home({children}) {
    return (
      <>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
      </>
    )
  }
  