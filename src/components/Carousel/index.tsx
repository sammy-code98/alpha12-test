import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide from "../../assets/Slide.png";
import slide2 from "../../assets/Slide2.png";
import slide1 from "../../assets/Slide1.png";

export default function Carousel(): JSX.Element {
  return (
    <div className="h-full p-1 border border-blueLight rounded-md shadow-sm">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide}
              alt="slide1"
              className="absolute object-cover opacity-1"
            />
            <div className="absolute top-3/4">
              <div className="px-3 bg-dark opacity-90">
                <h3 className="text-white font-medium text-lg text-left">
                  Latest News & Updates
                </h3>

                <p className="text-xs text-white text-left font-medium">
                  Turpis interdum nunc varius ornare dignissim pretium. Massa
                  ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                  Fringilla purus, erat fringilla tincidunt quisque non.
                  Pellentesque in ut tellus.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide1}
              alt="slide1"
              className="absolute object-cover opacity-1"
            />
            <div className="absolute top-3/4">
              <div className="px-3 bg-dark opacity-90">
                <h3 className="text-white font-medium text-lg text-left">
                  Latest News & Updates
                </h3>

                <p className="text-xs text-white text-left font-medium">
                  Turpis interdum nunc varius ornare dignissim pretium. Massa
                  ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                  Fringilla purus, erat fringilla tincidunt quisque non.
                  Pellentesque in ut tellus.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide2}
              alt="slide1"
              className="absolute object-cover opacity-1"
            />
            <div className="absolute top-3/4">
              <div className="px-3 bg-dark opacity-90">
                <h3 className="text-white font-medium text-lg text-left">
                  Latest News & Updates
                </h3>

                <p className="text-xs text-white text-left font-medium">
                  Turpis interdum nunc varius ornare dignissim pretium. Massa
                  ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                  Fringilla purus, erat fringilla tincidunt quisque non.
                  Pellentesque in ut tellus.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
