import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Map from '../../components/map';
import FormSend from '../../components/form-send';
import { UserCheck, ShieldCheck, Clock, Puzzle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const reasons = [
  {
    icon: <UserCheck className="w-6 h-6 text-green-600" />,
    titleuz: "Tor sohadagi revmatologlar",
    titleru: "Узкопрофильные врачи-ревматологи",
    titleen: "Specialized Rheumatologists",
    descriptionuz: "Keng klinik tajribaga ega",
    descriptionru: "С большим клиническим опытом",
    descriptionen: "With extensive clinical experience",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-green-600" />,
    titleuz: "Individual yondashuv",
    titleru: "Индивидуальный подход",
    titleen: "Personalized Approach",
    descriptionuz: "Har bir bemorga alohida e’tibor",
    descriptionru: "К каждому пациенту",
    descriptionen: "Tailored care for every patient",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    titleuz: "Aniq diagnostika",
    titleru: "Высокая точность диагностики",
    titleen: "High Diagnostic Accuracy",
    descriptionuz: "Zamonaviy texnologiyalar bilan aniqlik",
    descriptionru: "",
    descriptionen: "",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-600" />,
    titleUz: "Qulay qabul vaqti",
    titleru: "Удобное время приёма",
    titleen: "Convenient Appointment Time",
    descriptionuz: "Minimal kutish va moslashuvchan jadval",
    descriptionru: "И минимальное ожидание",
    descriptionen: "Minimal waiting time and flexible schedule",
  },
];

const AboutPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [t, i18n] = useTranslation()
  return (
    <div className="pt-[60px] md:pt-[110px]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#EFF5F9]/80 to-[#EFF5F9]/80 h-[120px] sm:h-[150px] md:h-[180px] overflow-hidden">
        <div className='max-w-6xl mx-auto h-full px-4 sm:px-6'>
          {/* Text Content */}
          <div className="z-10 relative flex flex-col h-full justify-between">
            <div className="text-xs sm:text-sm text-gray-600 pt-4 sm:pt-6">
              <span className="hover:text-blue-600 cursor-pointer">{t("header.home")}</span>
              <span className="mx-2">/</span>
              <span className="text-blue-600">{t("about.title")}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pb-4 sm:pb-6">{t("about.title")}</h1>
          </div>

          {/* Doctor Image - Hidden on small screens, shown on medium and up */}
          <img
            src="/aboutdoctor.png"
            alt="doctor"
            className="hidden sm:block absolute bottom-0 right-0 object-cover h-[80%] md:h-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="prose max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 font-bold">
          {t("about.description.text1")}
        </p>

        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          {t("hero.text")}
        </p>

        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          {t("about.description.text3")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10"> {t("about.why.title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{item?.[`title${i18n.language}`]}</h3>
              <p className="text-sm text-gray-500 mt-2">{item?.[`description${i18n.language}`]}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            <span className="font-semibold text-indigo-600">{t("about.revma.title")}</span> {t("about.revma.description")}
          </p>
        </div>
      </div>

      {/* Image Slider */}
      <div className='max-w-6xl mx-auto  px-4 sm:px-6 pb-12'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mb-2 sm:mb-4"
        >
          <SwiperSlide>
            <img
              src={`slider1.png`}
              className="w-full h-[200px] sm:h-[350px] md:h-[500px] object-cover rounded"
              alt="Slider1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`slider2.jpg`}
              className="w-full h-[200px] sm:h-[350px] md:h-[500px] object-cover rounded"
              alt="Slider2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`slider3.jpg`}
              className="w-full h-[200px] sm:h-[350px] md:h-[500px] object-cover rounded"
              alt="Slider3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`slider4.jpg`}
              className="w-full h-[200px] sm:h-[350px] md:h-[500px] object-cover rounded"
              alt="Slider4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`slider5.png`}
              className="w-full h-[200px] sm:h-[350px] md:h-[500px] object-cover rounded"
              alt="Slider5"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 10
            }
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mt-2 sm:mt-0"
        >
          <SwiperSlide>
            <img
              src={`slider1.png`}
              className="w-full h-[80px] sm:h-[100px] md:h-[150px] object-cover rounded cursor-pointer"
              alt="Slider1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`slider2.jpg`}
              className="w-full h-[80px] sm:h-[100px] md:h-[150px] object-cover rounded cursor-pointer"
              alt="Slider2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`slider3.jpg`}
              className="w-full h-[80px] sm:h-[100px] md:h-[150px] object-cover rounded cursor-pointer"
              alt="Slider3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`slider4.jpg`}
              className="w-full h-[80px] sm:h-[100px] md:h-[150px] object-cover rounded cursor-pointer"
              alt="Slider4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`slider5.png`}
              className="w-full h-[80px] sm:h-[100px] md:h-[150px] object-cover rounded cursor-pointer"
              alt="Slider5"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Block 1 */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src="line1.png" alt="icon" className="w-14 h-14" />
            <h4 className="text-lg font-bold">{t("about.card.card1-title")}</h4>
          </div>
          <p className="text-gray-700">
            {t("about.card.card1-desc")}
          </p>
        </div>
        {/* Block 2 */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src="line2.png" alt="icon" className="w-14 h-14" />
            <h4 className="text-lg font-bold">{t("about.card.card2-title")}</h4>
          </div>
          <p className="text-gray-700">
            {t("about.card.card2-desc")}
          </p>
        </div>
        {/* Block 3 */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src="line3.png" alt="icon" className="w-14 h-14" />
            <h4 className="text-lg font-bold">{t("about.card.card3-title")}</h4>
          </div>
          <p className="text-gray-700">
            {t("about.card.card3-desc")}
          </p>
        </div>
        {/* Block 4 */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src="line4.png" alt="icon" className="w-14 h-14" />
            <h4 className="text-lg font-bold">{t("about.card.card4-title")}</h4>
          </div>
          <p className="text-gray-700">
            {t("about.card.card4-desc")}
          </p>
        </div>
      </div>
      <div className='max-w-6xl mx-auto'>
        <Map />
        <FormSend />
      </div>
    </div>
  )
}

export default AboutPage