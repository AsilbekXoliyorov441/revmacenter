import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/links";

const ServicesSwiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }

    // Har safar slide o'zgarganda active bullet progressini reset qilish
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    bullets.forEach((bullet, index) => {
      bullet.style.setProperty("--bullet-progress", "0");
      if (index === swiper.realIndex) {
        bullet.style.setProperty("--bullet-progress", `${progress}`);
      }
    });
  };

  return (
    <div className="relative w-full h-full md:h-[75vh]  lg:mt-[120px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-full"
      >
        {/* Slides */}

        {servicesData?.map((item) => (
          <SwiperSlide>
            <div className="flex  items-center justify-center h-[120vh] md:h-[75vh] pt-[20px] md:pt-0 bg-[#F0F6F9]">
              <div className="container mx-auto px-[20px]">
                <ul className="flex gap-[5px] items-center mt-[60px] md:mt-0 mb-[20px] md:mb-0 lg:pt-[60px]">
                  <li className="flex flex-col">
                    <Link className="text-[#353535] " to="/">
                      Главная
                      <span className="block h-[1px] -mt-1 pt-0 bg-[#353535]"></span>
                    </Link>
                  </li>
                  <li className="flex flex-col">/</li>
                  <li className="text-[#35353599]">Услуги</li>
                </ul>
                <div className="flex flex-col gap-[60px] md:gap-[20px] md:flex-row items-center justify-between">
                  <div className="w-full md:w-[50%]">
                    <h1 className="text-[18px] mb-[40px] font-bold text-[#00578A] uppercase">
                      {item?.slug}
                    </h1>
                    <h2 className="text-[36px] font-[600] leading-[48px] max-w-[650px] mb-[10px]">
                      {item?.title}
                    </h2>
                    <p className="text-[18px] max-w-[600px] mb-[40px]">
                      {item?.description}
                    </p>

                    <Link
                      to="#"
                      className="relative  text-white bg-red-600 inline-flex  items-center justify-center overflow-hidden rounded-[5px] max-w-[204px] h-[54px] w-full  font-medium  transition-colors duration-1000 group"
                    >
                      Записаться
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
                    </Link>
                  </div>
                  <img
                    className="w-full  md:w-[50%]"
                    src={item?.image}
                    alt="kardiologiya"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <defs>
              <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="red" />
                <stop offset="100%" stopColor="red" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span className="text-red-600" ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ServicesSwiper;
