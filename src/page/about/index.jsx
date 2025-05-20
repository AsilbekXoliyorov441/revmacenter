import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Map from '../../components/map';
import FormSend from '../../components/form-send';

const AboutPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="pt-[60px] md:pt-[110px]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#EFF5F9]/80 to-[#EFF5F9]/80 h-[120px] sm:h-[150px] md:h-[180px] overflow-hidden">
        <div className='max-w-6xl mx-auto h-full px-4 sm:px-6'>
          {/* Text Content */}
          <div className="z-10 relative flex flex-col h-full justify-between">
            <div className="text-xs sm:text-sm text-gray-600 pt-4 sm:pt-6">
              <span className="hover:text-blue-600 cursor-pointer">Главная</span>
              <span className="mx-2">/</span>
              <span className="text-blue-600">О центре</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pb-4 sm:pb-6">О центре</h1>
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
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Городской Медицинский Центр – это многопрофильное амбулаторно-поликлиническое учреждение для детей и взрослых в городе Мытищи. Мы предоставляем платные медицинские услуги и занимаем лидирующие позиции среди медицинских учреждений города Мытищи. У нас ежегодно обслуживаются более 150000 пациентов.
        </p>

        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Городской Медицинский Центр в Мытищах осуществляет комплексное медицинское обслуживание населения. Действует собственная служба круглосуточной скорой медицинской помощи, детские и взрослые отделения, рентгенологическое отделение, отделение функциональной диагностики, эндоскопия, собственная лаборатория, а также клиники стоматологии и косметологии. В Городском Медицинском Центре работает медицинская комиссия для определения профпригодности работника, проведения профилактических осмотров, выдачи медицинских справок.
        </p>

        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Организация лечебно-диагностической работы в Городском Медицинском Центре соответствует строгим требованиям, предъявляемым к медицинским учреждениям. Уровень медицинских работников ежегодно повышается путем современных тренингов, конференций и др. тематических мероприятий; еженедельно проводится внутренний контроль качества оказания медицинской помощи. Клинический разбор истории болезни позволяет не только общаться врачам друг с другом, но и более точно поставить диагноз и услышать дополнительное мнение коллег по данному пациенту. В Городском Медицинском Центре представлен весь комплекс поликлинических услуг для пациентов любых возрастов.
        </p>
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
            <h4 className="text-lg font-bold">Удобное расположение</h4>
          </div>
          <p className="text-gray-700">
            Мы находимся недалеко от железнодорожной станции Мытищи, и Вы всегда сможете быстро и удобно добраться как с других районов Мытищ, так и из Москвы.
          </p>
        </div>
        {/* Block 2 */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src="line2.png" alt="icon" className="w-14 h-14" />
            <h4 className="text-lg font-bold">Круглосуточная работа мед. центра</h4>
          </div>
          <p className="text-gray-700">
            Медицинский Центр работает круглосуточно, без выходных и праздничных дней. Запись пациентов осуществляется через call-центр, а также в режиме online.
          </p>
        </div>
        {/* Block 3 */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src="line3.png" alt="icon" className="w-14 h-14" />
            <h4 className="text-lg font-bold">Комплексное медицинское обслуживание</h4>
          </div>
          <p className="text-gray-700">
            Работаем как с физическими лицами, так и с корпоративными клиентами, предоставляя комплексное медицинское обслуживание в рамках программ ДМС и за наличный расчет.
          </p>
        </div>
        {/* Block 4 */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src="line4.png" alt="icon" className="w-14 h-14" />
            <h4 className="text-lg font-bold">Одни из лучших специалистов</h4>
          </div>
          <p className="text-gray-700">
            Вас ждут качественный сервис, опытный и высококвалифицированный персонал, комфортные условия.
          </p>
        </div>
      </div>
      <div className='max-w-6xl mx-auto'>
        <Map/>
        <FormSend/>
      </div>
    </div>
  )
}

export default AboutPage