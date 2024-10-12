import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

const Carousel = ({ data, ...props }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      {...props}
    >
      {data.map((item) => (
        <SwiperSlide key={item.key}>{item.element}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
