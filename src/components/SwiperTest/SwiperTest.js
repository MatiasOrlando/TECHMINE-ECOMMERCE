import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const SwiperTest = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={6}
      onSwiper=""
      autoplay={true}
      style={{ backgroundColor: "white" }}
    >
      <SwiperSlide>
        <img
          src="/images/swiperamd.jpg"
          alt="logoAmd2"
          style={{ height: "120px", width: "120px", marginLeft: "50px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="/images/logomsi.jpg"
          alt="logoMSI"
          style={{ height: "120px", width: "120px", marginLeft: "40px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="/images/logoadrus.jpg"
          alt="logoAdrus"
          style={{ height: "120px", width: "120px", marginLeft: "50px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/logofruy.jpg"
          alt="logoAdrus"
          style={{ height: "120px", width: "120px", marginLeft: "50px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/logotrust.jpg"
          alt="logoTrust"
          style={{ height: "120px", width: "120px", marginLeft: "50px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/swipercorsair.jpg"
          alt="logoCorsair"
          style={{ height: "120px", width: "120px", marginLeft: "50px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/swiperlogitech.jpg"
          alt="logoLogitech"
          style={{ height: "120px", width: "120px", marginLeft: "50px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/swiperrazer.jpg"
          alt="logoCorsair"
          style={{ height: "120px", width: "120px", marginLeft: "50px" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/swipersaphire.jpg"
          alt="logoCorsair"
          style={{ height: "120px", width: "120px", marginLeft: "50px" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperTest;
