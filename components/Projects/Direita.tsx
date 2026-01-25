import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import estilo from "./ProjectDireita.module.scss";
import { useState } from "react";
import { Project } from "@/interfaces/Landing";
import Link from "next/link";

export default function Direita({
  projects,
}: Readonly<{ projects: Project[] }>) {
  const [active, setActive] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActive(swiper.realIndex);
  };

  return (
    <div className={estilo["swiperContainer"]}>
      <Swiper
        className={estilo["swiperDireita"]}
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        centerInsufficientSlides={true}
        onSlideChange={handleSlideChange}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1023: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide className={estilo["slides"]} key={project.id}>
            <div>
              <img
                className={estilo["imagem"]}
                src={project.image}
                alt={project.alt}
              />
            </div>
            <div
              className={active === 0 ? estilo["active"] : estilo["inactive"]}
            >
              <h3>{project.title}</h3>
              <Link href={project.link} target="_blank">
                Ver mais
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
