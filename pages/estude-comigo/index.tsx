"use client";

import styles from "./EstudeComigo.module.scss";

import Header from "@/components/Blog/Header";
import GradeTopicos from "@/components/Blog/GradeTopicos";
import LayoutBase from "@/components/layouts/LayoutBase";
import { RoadmapBackend } from "@/helpers/RoadmapBackend";
import { Category } from "@/interfaces/Estude-comigo";

export async function getStaticProps() {
  let notFound = false;
  const roadmapBackend = new RoadmapBackend();
  const data: Category[] = await roadmapBackend.categories();
  return {
    props: { data },
    revalidate: 60,
    notFound,
  };
}

export default function EstudeComigo({ data }: Readonly<{ data: Category[] }>) {
  return (
    <LayoutBase estudeComigo={true}>
      <div className={styles["estudeComigo"]}>
        <Header />
        <div>
          <div>
            <h2>Escolha um tópico para explorar</h2>
            <GradeTopicos topicos={data} />
          </div>
        </div>
      </div>
    </LayoutBase>
  );
}
