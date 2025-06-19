import estilo from "./Header.module.scss";
import Link from "next/link"; // NOSONAR
import imagem from "./logo.svg";
import { ReactNode, useState } from "react";
/*import SideBar from "./HeaderComponents/SideBar"; */ // NOSONAR
import { useRouter } from "next/router";
import Image from "next/image";
import SideBar from "./HeaderComponents/SideBar";

interface HeaderProps {
  metaTags: ReactNode;
  blog?: boolean;
  estudeComigo?: boolean;
}

export default function Header({
  metaTags,
  blog = false,
  estudeComigo = false,
}: Readonly<HeaderProps>) {
  const rotaAtual = useRouter();

  const [clicked, setClicked] = useState(false);

  const [rota, setRota] = useState(rotaAtual.pathname);

  if (rotaAtual.pathname != rota) {
    setClicked(false);
    setRota(rotaAtual.pathname);
  }

  const handleSideBar = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {metaTags}
      <div className={`${estilo.header} ${clicked ? estilo.fixed : ""}`}>
        <div>
          <div className={estilo.left}>
            <Link href="/">
              <Image
                src={imagem}
                alt="Logotipo WeBest"
                width={132}
                height={61}
                priority={true}
              />
            </Link>
          </div>
          <div className={estilo.right}>
            <Link
              className={`${estilo.link} ${
                rotaAtual.pathname == "/" ? estilo.active : ""
              }`}
              href="/"
            >
              Início
            </Link>
            <Link
              className={`${estilo.link} ${
                rotaAtual.pathname == "/sobre" ? estilo.active : ""
              }`}
              href="/sobre"
            >
              Sobre mim
            </Link>
            <Link
              rel="preload"
              className={`${estilo.link} ${
                rotaAtual.pathname == "/projetos" ? estilo.active : ""
              }`}
              href="/#projetos"
            >
              Projetos
            </Link>
            <Link
              className={`${estilo.link} ${
                rotaAtual.pathname == "/skills" ? estilo.active : ""
              }`}
              href="/#habilidades"
            >
              Habilidades
            </Link>
            <Link
              className={`${estilo.link} ${blog ? estilo.active : ""}`}
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className={`${estilo.link} ${estudeComigo ? estilo.active : ""}`}
              href="/estude-comigo"
            >
              Estude Comigo
            </Link>

            {/* <Link
              rel="preload"
              className={`${estilo.link} ${
                rotaAtual.pathname == "/contato" ? estilo.active : ""
              }`}
              href="/contato"
            >
              Contato
            </Link>*/}
            <div onClick={handleSideBar}>
              {clicked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.75 4.75l14.5 14.5M19.25 4.75L4.75 19.25"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      {clicked ? (
        <SideBar
          rotaAtual={rotaAtual.pathname}
          blog={blog}
          estudeComigo={estudeComigo}
        />
      ) : (
        <></>
      )}
    </>
  );
}
