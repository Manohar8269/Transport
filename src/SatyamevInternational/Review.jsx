import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Photo1 from '../assets/Review1.png';
import Photo2 from '../assets/Review2.png';
import Photo3 from '../assets/Review3.png';
import Photo4 from '../assets/Review4.png';

const ImageCarousel = () => {
  const images = [Photo1, Photo3, Photo2, Photo1, Photo4];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 relative">
        <h3 className="text-gray-500 text-lg font-semibold">Clients Testimonials</h3>
        <h2 className="text-left text-4xl font-bold text-orange-500">What Our Clients Say!</h2>
        <br></br>
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
