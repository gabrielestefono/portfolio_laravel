import Image from "next/image";
import Link from "next/link";
import style from "./AboutInner.module.scss";
import separator1 from "./sep1.jpg";
import separator2 from "./sep2.png";
import separator3 from "./sep3.png";
import separator4 from "./sep4.png";
import separator5 from "./sep5.jpg";

export default function AboutInner() {
  const title1 = (
    <>
      Olá! <br /> Sou o Gabriel Estéfono.
    </>
  );

  const title2 = <>Meus primeiros freelas (ou quase) e aprendizados</>;

  const title3 = <>Primeira experiência profissional: Tuxon</>;

  const title4 = <>Nova etapa: CTMGEO</>;

  const title5 = <>Onde estou hoje: Quero Passagem</>;

  const texto1 = (
    <>
      Minha jornada na tecnologia começou de forma curiosa e não tão linear.
      Desde 2014, eu já brincava com <strong>HTML</strong> e{" "}
      <strong>CSS</strong>, mas na época não levei isso muito adiante. Trabalhei
      durante 6 anos na{" "}
      <Link
        href="https://www.frimesa.com.br/pt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Frimesa</strong>
      </Link>{" "}
      , uma grande empresa de alimentos. Foi um período muito importante pra
      mim, mas, com o tempo, percebi que não era o que realmente queria para
      minha vida. <br /> <br /> No auge da pandemia em 2021, decidi mergulhar de
      vez no mundo da programação. Comecei estudando na plataforma{" "}
      <strong>Alura</strong>, onde aprendi os fundamentos de{" "}
      <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>.
      Também explorei <strong>Python</strong> com projetos pessoais, até me
      apaixonar de vez pelo <strong>PHP</strong> — que me fisgou de uma vez.
    </>
  );

  const texto2 = (
    <>
      Nesse início, contei com a ajuda de um mentor incrível,{" "}
      <Link
        href="https://site-mentoria-tech.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <strong> Weslley Fratini</strong>{" "}
      </Link>
      , que me orientou muito bem no que estudar e como me desenvolver. <br />{" "}
      <br /> Comecei a construir meus próprios projetos, tentando atuar como{" "}
      <strong>freelancer</strong>. Infelizmente, na minha cidade, as pessoas
      ainda não valorizavam muito esse tipo de serviço — acharam até absurdo um
      site custar entre 500 e 700 reais. Apesar disso, essa fase foi essencial
      para ganhar experiência, errar, acertar e entender mais sobre o mercado.
    </>
  );

  const texto3 = (
    <>
      Com muito estudo e foco, consegui minha primeira vaga como desenvolvedor
      na{" "}
      <a
        href="https://www.tuxon.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <strong>Tuxon</strong>{" "}
      </a>
      . Lá trabalhei principalmente com <strong>PHP</strong> e{" "}
      <strong>Laravel</strong>, além de sistemas em <strong>PHP legado</strong>.{" "}
      <br />
      <br /> Atuei na criação de sites como o da{" "}
      <a
        href="https://www.unibf.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <strong>UniBF</strong>{" "}
      </a>
      , desenvolvimento de portais internos para a própria{" "}
      <a
        href="https://www.frimesa.com.br/pt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <strong>Frimesa</strong>{" "}
      </a>{" "}
      (onde trabalhei anteriormente), e também participei na criação do site de
      uma empresa de modelos chamada <strong>Atom</strong>. Tive contato com{" "}
      <strong>Flutter</strong> para alguns apps, além de muito backend. <br />
      <br /> Foi nessa empresa que conheci meu grande parceiro de trabalho,{" "}
      <a
        href="https://portfolio.abmael.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <strong>Abmael</strong>{" "}
      </a>
      , que contribuiu muito para meu crescimento. Nessa época, estudar de{" "}
      <strong>2 a 4 horas por dia</strong> se tornou hábito — e permanece até
      hoje.
    </>
  );

  const texto4 = (
    <>
      Depois da Tuxon, surgiu a oportunidade de trabalhar na{" "}
      <Link
        href="https://www.ctmgeo.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>CTMGEO</strong>
      </Link>
      , uma empresa especializada em <strong>Geotecnologia</strong> e soluções
      geoespaciais.
      <br />
      <br />
      Aqui tive meu primeiro contato mais intenso com <strong>
        Next.js
      </strong>, <strong>React</strong> e também <strong>Java</strong>. Foi um
      período muito rico em aprendizado técnico,especialmente na parte de{" "}
      <strong>frontend moderno</strong> com <strong>React e Next.js</strong>.
      <br />
      <br />
      Apesar de ter sido uma experiência relativamente curta, foi essencial para
      minha transição definitiva para stacks modernas. Acabei saindo após
      receber uma recomendação do meu colega <strong>Abmael</strong>, que me
      indicou para uma nova oportunidade.
    </>
  );

  const texto5 = (
    <>
      Atualmente trabalho na{" "}
      <a
        href="https://queropassagem.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <strong>Quero Passagem</strong>{" "}
      </a>
      , uma plataforma focada no setor de <strong>turismo</strong> e transporte.{" "}
      <br />
      <br /> Aqui atuo em projetos extremamente diversos, utilizando várias
      stacks como <strong>Vue.js</strong>, <strong>Angular</strong>,{" "}
      <strong>Laravel</strong>, <strong>PHP puro</strong> e outras tecnologias.
      O ambiente é desafiador e cheio de oportunidades de aprendizado, já que a
      empresa possui muitos sistemas internos e públicos. <br />
      <br /> Estou constantemente me desenvolvendo, e meu objetivo atual é ser
      reconhecido como <strong>desenvolvedor pleno</strong> no meu próximo ciclo
      de PDI (e quem sabe logo mais, sênior, né? 😎 #QPMENOTA).
    </>
  );

  const data = [
    {
      id: 1,
      title: title1,
      text: texto1,
      image: separator1,
      alt_text: "Imagem da logo da Frimesa",
      bgColor: "#ED5043",
    },
    {
      id: 2,
      title: title2,
      text: texto2,
      image: separator2,
      alt_text: "Imagem da logo da Mentoria Tech",
      bgColor: "#EDEFF3",
    },
    {
      id: 3,
      title: title3,
      text: texto3,
      image: separator3,
      alt_text: "Imagem da logo da Tuxon",
      bgColor: "#E1E1E1",
    },
    {
      id: 4,
      title: title4,
      text: texto4,
      image: separator4,
      alt_text: "Imagem da logo da CTMGEO",
      bgColor: "#ffffff",
    },
    {
      id: 5,
      title: title5,
      text: texto5,
      image: separator5,
      alt_text: "Imagem da logo da Quero Passagem",
      bgColor: "#011D41",
    },
  ];

  return (
    <div className={style["aboutinner"]}>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <div style={{ backgroundColor: item.bgColor }}>
              <Image
                className={style["image"]}
                src={item.image}
                width={item.image.width}
                height={item.image.height}
                alt={item.alt_text}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
