import React from 'react'
import ServicesSwiper from '../../components/services'
import ServiceStatistics from '../../components/service-statistics'
import Accordion from '../../components/service-accordion';
import Map from './../../components/map/index';
import FormSend from './../../components/form-send/index';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <section id="services-hero">
        <ServicesSwiper />
      </section>
      <section id="service-statistics" className="pt-[60px]">
        <ServiceStatistics />
      </section>
      <section id="service-accordion" className="pt-[60px]">
        <div className="container mx-auto px-[20px] mb-[10px]">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[36px] font-bold">
            {t("service.title")}
          </h1>
        </div>
        <Accordion />
      </section>
      <section id="service-map">
        <div className="container mx-auto px-[20px]">
          <Map />
        </div>
      </section>
      <section id="send">
        <div className="container mx-auto px-[20px]">
          <FormSend />
        </div>
      </section>
    </>
  );
}

export default ServicesPage