import dynamic from "next/dynamic";
import Footer from "./Footer";

const Header = dynamic(() => import('./Header'));

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
  