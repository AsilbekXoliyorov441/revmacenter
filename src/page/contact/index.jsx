import React from 'react'
import { Link } from 'react-router-dom';
import FormSend from '../../components/form-send';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact with medicine</title>
        <meta
          name="description"
          content="This Medicine Hospital is based on curing revmatizim"
        />
      </Helmet>

      <section id="contact" className="pt-[100px] lg:pt-[150px]">
        <div className="container mx-auto px-[20px]">
          <ul className="flex gap-[5px] items-center">
            <li className="flex flex-col">
              <Link className="text-[#353535] " to="/">
                Главная
                <span className="block h-[1px] -mt-1 pt-0 bg-[#353535]"></span>
              </Link>
            </li>
            <li className="flex flex-col">/</li>
            <li className="text-[#35353599]">Контакты</li>
          </ul>
          <h1 className="text-[48px] font-[700] mt-[30px]">Контакты</h1>
          <h2 className="text-[32px] text-[#00578A] mt-[40px] font-[700]">
            Медицинский центр (взрослое отделение)
          </h2>
          <ul className=" grid sm:grid-cols-2 gap-[20px] lg:flex justify-between mt-[40px]">
            <li className="flex flex-col">
              <span className="text-[18px]">Телефон:</span>
              <a
                className=" text-[18px] xl:text-[22px] font-[700]"
                href="tel:+998998180111"
              >
                +998(99) 818-01-11
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[18px]">E-mail:</span>
              <a
                className=" text-[18px] xl:text-[22px] font-[700]"
                href="aslibekxoliyorov441@gmail.com"
              >
                info@gormedcentre.ru
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[18px]">Адрес:</span>
              <a
                className=" text-[18px] xl:text-[22px] font-[700]"
                href="#address"
              >
                Кибрайский район Университетская ул., 5/1.
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-[18px]">Режим работы:</span>
              <li className="flex-col xl:flex">
                {/* O‘zbek tilidagi jadval – xl dan kichik ekranlarda ko‘rinadi */}
                <span className="block font-bold">понедельник-пятниц: 08:00‑18:00</span>
                <span className="block font-bold">cуббота: 08:00‑14:00</span>
              </li>
            </li>
          </ul>

          <Map />

          <FormSend />
        </div>
      </section>
    </>
  );
}

export default ContactPage