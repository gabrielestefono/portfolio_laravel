import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import estilo from "./ProjectDireita.module.scss";

SwiperCore.use([Pagination, Navigation]);

export default function Direita(){
    let slidesQuery = document.querySelectorAll(estilo.slides);
    let slides = Array.from(slidesQuery);
    console.log(slides);
  return (
    <Swiper className={estilo.swiperDireita} 
    spaceBetween={15} 
    slidesPerView={2.65}
    loop={true}
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
