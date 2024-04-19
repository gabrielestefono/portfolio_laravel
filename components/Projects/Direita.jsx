import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import estilo from "./ProjectDireita.module.scss";

SwiperCore.use([Pagination, Navigation]);

export default function Direita() {
  const mudarAltura = (swiper) => {
    const slides = swiper.slides;

    slides.forEach((slide, index) => {
      if (index === swiper.activeIndex) {
        setTimeout(() => {
          slide.style.transition = '300ms';
          slide.style.maxHeight = '34rem';
          swiper.slideTo(swiper.activeIndex, 0, false);
        }, 10);
        slide.style.transition = '';
      } else {
        slide.style.maxHeight = '20rem';
        slide.style.transition = '';
      }
    });
  };

  return (
    <Swiper className={estilo.swiperDireita} 
    slidesPerView={'auto'}
    spaceBetween={15}
    loop={true}
    onInit={mudarAltura}
    onTransitionEnd={mudarAltura}
    >
      <SwiperSlide className={estilo.slides}> Slide 1</SwiperSlide>
      <SwiperSlide className={estilo.slides}> Slide 2</SwiperSlide>
      <SwiperSlide className={estilo.slides}> Slide 3</SwiperSlide>
      <SwiperSlide className={estilo.slides}> Slide 4</SwiperSlide>
      <SwiperSlide className={estilo.slides}> Slide 5</SwiperSlide>
      <SwiperSlide className={estilo.slides}> Slide 6</SwiperSlide>
    </Swiper>
  );
}
