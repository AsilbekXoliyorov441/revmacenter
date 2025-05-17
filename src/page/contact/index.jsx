import React from 'react'
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
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
            <a className=" text-[18px] xl:text-[22px] font-[700]" href="tel:+998998180111">
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
            <a className=" text-[18px] xl:text-[22px] font-[700]" href="#address">
              г. Мытищи, ул.Рождественская, д.7
            </a>
          </li>
          <li className="flex flex-col">
            <span className="text-[18px]">Режим работы:</span>
            <span className=" text-[18px] xl:text-[22px] font-[700]">
              ежедневно с 9.00 до 21.00
            </span>
          </li>
        </ul>

        <iframe
          className="h-[492px] mt-[40px] mb-[40px] rounded-[15px]"
          src="https://yandex.uz/map-widget/v1/?ll=69.344224%2C41.368629&z=16&l=map&pt=69.344224,41.368629,pm2rdm"
          width="100%"
          allowFullScreen
          title="Yandex Map"
        />
      </div>
    </section>
  );
}

export default ContactPage