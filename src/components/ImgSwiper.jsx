"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination } from "swiper/modules";
import hero from "../../public/images/hero.jpg";

const ImgSwiper = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <h1>Gallery</h1>
      <h1>Gallery</h1>
      <h1>Gallery</h1>
      <h1>Gallery</h1>
      <h1>Gallery</h1>
      <h1>Gallery</h1>

      <Swiper
        effect={"coverfolw"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className=""
      >
        <SwiperSlide>
          <Image src={hero} height={66} width={66} alt="img"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={hero} height={66} width={66} alt="img"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={hero} height={66} width={66} alt="img"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={hero} height={66} width={66} alt="img"></Image>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image src={hero} height={66} width={66} alt="img"></Image>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image src={hero} height={66} width={66} alt="img"></Image>
        </SwiperSlide>
        <div className="slider-controler">
          <div>
            <ion-ion></ion-ion>
          </div>
          <div>
            <ion-ion></ion-ion>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ImgSwiper;
