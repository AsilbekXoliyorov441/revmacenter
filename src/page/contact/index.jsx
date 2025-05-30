import React from 'react';
import { Link } from 'react-router-dom';
import FormSend from '../../components/form-send';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('contactPage.title')}</title>
        <meta
          name="description"
          content={t('contactPage.metaDescription')}
        />
      </Helmet>

      <section id="contact" className="pt-[100px] lg:pt-[150px]">
        <div className="container mx-auto px-[20px]">
          <ul className="flex gap-[5px] items-center">
            <li className="flex flex-col">
              <Link className="text-[#353535]" to="/">
                {t('breadcrumbs.home')}
                <span className="block h-[1px] -mt-1 pt-0 bg-[#353535]"></span>
              </Link>
            </li>
            <li className="flex flex-col">/</li>
            <li className="text-[#35353599]">{t('breadcrumbs.contacts')}</li>
          </ul>

          <h1 className="text-[48px] font-[700] mt-[30px]">{t('contactPage.header')}</h1>
          <h2 className="text-[32px] text-[#00578A] mt-[40px] font-[700]">
            {t('contactPage.subHeader')}
          </h2>

          <ul className="grid sm:grid-cols-2 gap-[20px] lg:flex justify-between mt-[40px]">
            <li className="flex flex-col">
              <span className="text-[18px]">{t('contactPage.phoneLabel')}</span>
              <a
                className="text-[18px] xl:text-[22px] font-[700]"
                href="tel:+998998180111"
              >
                +998(99) 818-01-11
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[18px]">{t("contactPage.emailLabel")}:</span>
              <a
                className="text-[18px] xl:text-[22px] font-[700]"
                href="mailto:revmacenter01@gmail.com"
              >
                revmacenter01@gmail.com
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[18px]">{t('contactPage.addressLabel')}</span>
              <a
                className="text-[18px] xl:text-[22px] font-[700]"
                href="#address"
              >
                {t('contactPage.address')}
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[18px]">{t('contactPage.workTimeLabel')}</span>
              <li className="flex-col xl:flex">
                <span className="block font-bold">{t('contactPage.weekdays')}</span>
                <span className="block font-bold">{t('contactPage.saturday')}</span>
              </li>
            </li>
          </ul>

          <Map />
          <FormSend />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
