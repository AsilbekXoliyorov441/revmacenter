import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";

const doctors = [
  {
    id: 1,
    firstName: "Dilshod",
    lastName: "Rahimov",
    specialtyUz: "Кардиолог",
    specialtyRu: "Кардиолог",
    specialtyEn: "Cardiologist",
    image: "/images/doctors/doc-1.png",
  },
  {
    id: 2,
    firstName: "Malika",
    lastName: "Saidova",
    specialtyUz: "Невролог",
    specialtyRu: "Невролог",
    specialtyEn: "Neurologist",
    image: "/images/doctors/doc-2.png",
  },
  {
    id: 3,
    firstName: "Javlon",
    lastName: "Akbarov",
    specialtyUz: "Гинеколог",
    specialtyRu: "Гинеколог",
    specialtyEn: "Gynecologist",
    image: "/images/doctors/doc-3.png",
  },
  {
    id: 2,
    firstName: "Malika",
    lastName: "Saidova",
    specialtyUz: "Невролог",
    specialtyRu: "Невролог",
    specialtyEn: "Neurologist",
    image: "/images/doctors/doc-4.png",
  },
  {
    id: 3,
    firstName: "Javlon",
    lastName: "Akbarov",
    specialtyUz: "Гинеколог",
    specialtyRu: "Гинеколог",
    specialtyEn: "Gynecologist",
    image: "/images/doctors/doc-1.png",
  },
  // qo‘shimcha shifokorlarni qo‘shing
];

const SwiperDoctors = ({ language = "Uz" }) => {
  return (
    <section id="doctors" className="pt-[90px] pb-[60px]">
      <div className="container mx-auto px-[20px]">
        <div className="relative">
          <h1 className="text-[24px] sm:text-[34px] md:text-[42px] mb-[20px] font-[700]">
            Врачи медицинского центра
          </h1>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom1 group hover:bg-[#017CC1] transition-colors duration-500 w-[52px] h-[52px] sm:flex items-center justify-center absolute hidden  top-[35px] right-[60px] z-10 -translate-y-1/2 bg-[#EAF6FF] rounded-full">
            <FiChevronLeft className="text-[#017CC1] group-hover:text-white text-[24px] transition-colors duration-500" />
          </button>
          <button className="swiper-button-next-custom1 group hover:bg-[#017CC1] transition-colors duration-500 w-[52px] h-[52px] sm:flex items-center justify-center absolute hidden  top-[35px] right-0 z-10 -translate-y-1/2 bg-[#EAF6FF] rounded-full">
            <FiChevronRight className="text-[#017CC1] group-hover:text-white text-[24px] transition-colors duration-500" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom1",
              nextEl: ".swiper-button-next-custom1",
            }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 1.5 },
              800: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {doctors.map((doc) => (
              <SwiperSlide key={doc.id}>
                <Link
                  to="/doctors"
                  className="relative sm:justify-center mx-auto flex items-center justify-center overflow-hidden rounded-[5px] bg-black/30 hover:bg-red-500  max-w-[400px] font-medium text-white transition-colors duration-1000 group"
                >
                  <img
                    className="w-full h-[224px] object-cover"
                    src={doc.image}
                    alt={`${doc.firstName} ${doc.lastName}`}
                  />

                  <div className="px-4 flex flex-col justify-between h-[200px] pb-[20px]">
                    <p className="text-[20px] font-bold mt-[20px]">
                      {doc.firstName} {doc.lastName}
                    </p>
                    <span className="text-[#017CC1] mb-[12px]">
                      {doc[`specialty${language}`]}
                    </span>
                  </div>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 -translate-x-full translate-y-full rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%] group-hover:opacity-100 pointer-events-none" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwiperDoctors;
