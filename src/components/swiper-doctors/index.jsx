import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import { useTranslation } from "react-i18next";

export const doctors = [
  {
    id: 1,
    image: "/unknown.webp",
    titleEn: "Yusupov Sunnatilla Abdumalikovich",
    titleRu: "Юсупов Суннатилла Абдумаликович",
    titleUz: "Yusupov Sunnatilla Abdumalikovich",
    specializationEn: "ENT specialist",
    specializationRu: "ЛОР",
    specializationUz: "LOR shifokori",
  },
  {
    id: 2,
    image: "/unknown.webp",
    titleEn: "Akbarhodjaeva Munira Ramatkhojaevna",
    titleRu: "Акбарходажева Мунира Раматходжаевна",
    titleUz: "Akbarxo‘jayeva Munira Ramatxo‘jayevna",
    specializationEn: "Cardiorheumatologist. Pediatrician",
    specializationRu: "Кардирематолог. Педиатр",
    specializationUz: "Kardioromatolog. Pediatr",
  },
  {
    id: 3,
    image: "/unknown.webp",
    titleEn: "Jalolhodjaeva Malika Kozimkhonovna",
    titleRu: "Жалолходжева Малика Козимхоновна",
    titleUz: "Jalolxo‘jayeva Malika Qozimxonovna",
    specializationEn: "Rheumatologist",
    specializationRu: "Ревматолог",
    specializationUz: "Revmatolog",
  },
  {
    id: 4,
    image: "/unknown.webp",
    titleEn: "Mukhdinova Zulaykho Nurillaevna",
    titleRu: "Мухиддинова Зулайхо Нуриллаевна",
    titleUz: "Muxiddinova Zulayho Nurillayevna",
    specializationEn: "Ultrasound diagnostics",
    specializationRu: "УЗИ диагностики",
    specializationUz: "UZI diagnostikasi",
  },

  {
    id: 5,
    image: "/unknown.webp",
    titleEn: "Магдиева Муборак",
    titleRu: "Магдиева Муборак",
    titleUz: "Магдиева Муборак",
    specializationEn: "Педиатр",
    specializationRu: "Педиатр",
    specializationUz: "Педиатр",
  },
];

const SwiperDoctors = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || "uz"
  return (
    <section id="doctors" className="pt-[90px] pb-[60px]">
      <div className="container mx-auto px-[20px]">
        <div className="relative">
          <h1 className="text-[24px] sm:text-[34px] md:text-[42px] mb-[20px] font-[700]">
            {t("doctor.title")}
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
                  className=" relative sm:justify-center mx-auto flex items-center justify-center overflow-hidden rounded-[5px] bg-black/30 hover:bg-red-500  max-w-[400px] font-medium text-white transition-colors duration-1000 group"
                >
                  <img
                    className=" h-[224px] w-[50%] object-cover"
                    src={doc.image}
                    alt={doc[`title${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`] ??
                      `${doc.firstName} ${doc.lastName}`}
                  />

                  <div className="px-4 w-[60%] flex flex-col justify-between h-[200px] pb-[20px]">
                    <p className="text-[20px] font-bold mt-[20px]">
                      {doc[`title${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`] ??
                        `${doc.firstName} ${doc.lastName}`}
                    </p>
                    <span className="text-[#017CC1] mb-[12px]">
                      {doc?.[`specialization${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`]}
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
