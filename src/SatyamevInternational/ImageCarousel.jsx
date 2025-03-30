import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Photo1 from '../assets/Photo1.png';
import Photo2 from '../assets/Photo2.png';
import Photo3 from '../assets/Photo3.png';
import Photo4 from '../assets/Photo4.png';

const ImageCarousel = () => {
  const images = [Photo1, Photo3, Photo2, Photo1, Photo4];

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
       <h2 className="text-center text-5xl font-bold mb-4 text-orange-500"> Our Membership</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{ delay: 3000 }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
  );
};

export default ImageCarousel;
