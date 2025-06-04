import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: 1,
    titleuz: "Ozonoterapiya",
    titleru: "Озонотерапия",
    titleen: "Ozone Therapy",
    image: "/images/services/service-1.webp",
    price: 120,
  },
  {
    id: 2,
    titleuz: "Fizioterapiya",
    titleru: "Физиотерапия",
    titleen: "Physiotherapy",
    image: "/images/services/service-2.jpg",
    price: 95,
  },
  {
    id: 3,
    titleuz: "Massaj",
    titleru: "Массаж",
    titleen: "Massage",
    image: "/images/services/service-3.jpg",
    price: 120,
  },
  {
    id: 4,
    titleuz: "Igloterapiya",
    titleru: "Иглотерапия",
    titleen: "Acupuncture",
    image: "/images/services/service-4.webp",
    price: 95,
  },
];

const SwiperServices = () => {
  const { t, i18n } = useTranslation()
  return (
    <section id="services" className="mt-[90px]">
      <div className="container mx-auto px-[20px]">
        <div className="relative">
          <h1 className="text-[24px] sm:text-[36px] md:text-[42px] mb-[20px] font-[700]">
            Популярные услуги
          </h1>
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom group hover:bg-[#017CC1] transition-colors duration-500 text-[white] border-none outline-none w-[52px] h-[52px] sm:flex items-center justify-center absolute hidden   top-[35px] right-[60px] z-10 -translate-y-1/2 bg-[#EAF6FF] rounded-full text-4xl">
            <FiChevronLeft className="text-[#017CC1] group-hover:text-white transition-colors duration-500 text-[24px]" />
          </button>
          <button className="swiper-button-next-custom group hover:bg-[#017CC1] transition-colors duration-500 text-[white] border-none outline-none w-[52px] h-[52px] sm:flex items-center justify-center text-[24px] absolute hidden  top-[35px] right-0 z-10 -translate-y-1/2 bg-[#EAF6FF] rounded-full text-4xl">
            <FiChevronRight className="text-[#017CC1] group-hover:text-white transition-colors duration-500" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              867: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="rounded-[4px] bg-[#F0F6F9] max-w-[350px] w-full h-[424px] overflow-hidden  mx-auto justify-center  relative bg-cover bg-center">
                  <div className="bg-[red] w-full">
                    <img
                      className="w-full h-[224px]"
                      src={service?.image}
                      alt="doctor"
                    />
                  </div>
                  <div className="px-4 flex flex-col justify-between h-[200px] pb-[20px]">
                    <p className=" py-2 text-[20px] font-bold mt-[20px]">
                      {service[`title${i18n.language}`]}
                    </p>
                    <Link
                      to="/contact"
                      className="relative inline-flex  items-center justify-center overflow-hidden rounded-[5px] bg-red-600 h-[54px] w-full  font-medium text-white transition-colors duration-1000 group"
                    >
                      {t("header.full")}
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwiperServices;
