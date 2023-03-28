import React from "react";
import CarouselContent from "./CarouselContent";
import { Swiper, SwiperSlide } from "swiper/react";
import * as images from "../../../assets/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper";

const Carousel = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // slidesPerView={2}

      breakpoints={{
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <CarouselContent
          stepDesktop={images.stepOneDesktop}
          stepMobile={images.stepOneMobile}
        />
      </SwiperSlide>

      <SwiperSlide>
        <CarouselContent
          stepDesktop={images.stepTwoDesktop}
          stepMobile={images.stepTwoMobile}
        />
      </SwiperSlide>

      <SwiperSlide>
        <CarouselContent
          stepDesktop={images.stepThreeDesktop}
          stepMobile={images.stepThreemobile}
        />
      </SwiperSlide>

      <SwiperSlide>
        <CarouselContent
          stepDesktop={images.stepFourDesktopWin}
          stepMobile={images.stepFourMobileWin}
        />
      </SwiperSlide>

      <SwiperSlide>
        <CarouselContent
          stepDesktop={images.stepFourDesktoploose}
          stepMobile={images.stepFourMobileloose}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
