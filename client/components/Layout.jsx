import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from 'react';

export default function Home({ children }) {
  const [carregado, setCarregado] = useState(false);

  // Defina uma função assíncrona para representar o carregamento do DOM
  const carregarDOM = async () => {
    // Simule uma operação assíncrona, por exemplo, uma busca de dados
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Depois que a operação assíncrona for concluída, marque o DOM como carregado
    setCarregado(true);
  };

  useEffect(() => {
    // Chame a função de carregamento do DOM no início do componente
    carregarDOM();
  }, []);

  const domCarregado = (
    <>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </>
  )

  return (
    <>
      <Header></Header>
      {carregado ? domCarregado : <></>}
    </>
  )
}
