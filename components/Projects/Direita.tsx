import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import estilo from "./ProjectDireita.module.scss";
import { useState } from "react";

export default function Direita() {
  const [active, setActive] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActive(swiper.realIndex);
  };

  return (
    <div className={estilo.swiperContainer}>
      <Swiper
        className={estilo.swiperDireita}
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        centerInsufficientSlides={true}
        onSlideChange={handleSlideChange}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          1023: {
            slidesPerView: 1
          },
          1200: {
            slidesPerView: 2
          },
        }}
      >
        <SwiperSlide className={estilo.slides}>
          <a
            href="https://github.com/gabrielestefono/blog_laravel"
            aria-label="Blog feito em laravel"
            target="_blank"
          >
            <img className={estilo.imagem} src="/images/Blog.png" alt="Blog" />
          </a>
          <div className={active === 0 ? estilo.active : estilo.inactive}>
            <h3>Blog Laravel</h3>
            <a href="https://github.com/gabrielestefono/" target="_blank">
              Ver mais
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
