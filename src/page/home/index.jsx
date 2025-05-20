import React, { Suspense, lazy } from 'react'
const Hero = lazy(() => import("../../components/hero"));
import { Helmet } from 'react-helmet-async';
import SwiperServices from '../../components/swiper-services';
import SwiperDoctors from '../../components/swiper-doctors';
import About from '../../components/about';
import Map from '../../components/map';
import FormSend from '../../components/form-send';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Medicine Uzbeksitan</title>
        <meta
          name="description"
          content="This Medicine Hospital is based on curing revmatizim"
        />
      </Helmet>
      <section className="md:pt-[120px] pt-[60px]">
        <Hero />
      </section>
      <SwiperServices />
      <SwiperDoctors />
      <About />

      <section id="map">
        <div className="container mx-auto px-[20px] mt-[90px]">
          <h1 className="text-[24px] font-bold sm:text-[28px] leading-0  md:text-[36px] lg:text-[42px]">
            Как нас найти
          </h1>
          <Map />
        </div>
      </section>

      <section id="form">
        <div className="container mx-auto px-[20px]">
          <FormSend />
        </div>
      </section>
    </>
  );
}

export default HomePage