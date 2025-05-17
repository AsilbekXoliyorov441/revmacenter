import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data/links";
import { FaTelegram, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F0F6F9] pt-[30px] pb-[30px]">
        <div className="container top-footer mx-auto px-[20px]">
          <div className="flex items-center justify-between">
            <Link
              className="w-[220px] hidden sm:max-w-[300px]   h-[73px] lg:flex items-center"
              to={"/"}
            >
              <img
                className="w-full"
                src="/LOGO.svg"
                alt="logo"
                loading="lazy"
              />
            </Link>

            <ul className="flex flex-wrap items-center  gap-[20px] xl:gap-[70px]">
              <Link
                className="w-[200px] sm:max-w-[300px] lg:hidden   flex items-center"
                to={"/"}
              >
                <img
                  className="w-full"
                  src="/LOGO.svg"
                  alt="logo"
                  loading="lazy"
                />
              </Link>
              {links?.map(({ text, href }, idx) => (
                <li key={idx}>
                  <NavLink className="font-bold  inline-block" to={href}>
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom-footer mt-[20px] xl:mt-[10px] container mx-auto  px-[20px]">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex  justify-between gap-[10px] sm:gap-[20px]">
            <li className="flex  flex-col gap-[15px] lg:gap-[10px]">
              <a href="#whatsapp" className="flex item-center gap-[10px]">
                <FaWhatsappSquare className="text-[22px]" />
                <span className="">
                  <span className="hidden sm:inline-block">Написать в</span>{" "}
                  Whatsapp
                </span>
              </a>
              <a href="#telegram" className="flex item-center gap-[10px]">
                <FaTelegram className="text-[22px]" />

                <span className="">
                  <span className="hidden sm:inline-block">Написать в</span>{" "}
                  Tелеграм
                </span>
              </a>
            </li>
            <li className="flex flex-col gap-[10px] sm:gap-0">
              <a
                className="text-[18px] sm:text-[24px] font-[500]"
                href="tel:+998998180111"
              >
                +998(99) 818-01-11
              </a>
              <a
                className="text-[18px] sm:text-[24px] font-[500]"
                href="tel:+998998180111"
              >
                +998(99) 818-01-11
              </a>
            </li>
            <li className=" flex-col gap-[12px]  flex">
              <a className="" href="/">
                г. Мытищи, ул.Рождественская, д.7
              </a>
              <span className="flex text-[14px] sm:text-[16px] items-center gap-[5px]">
                <span className="">Ежедневно</span>
                <span className=" ">с 9.00 до 21.00</span>
              </span>
            </li>
            <li className=" lg:flex">
              <Link
                className=" max-w-[272px] lg:px-[20px] h-[46px] flex items-center justify-center bg-[#E3EFF5] rounded-[5px] "
                to="/contact"
              >
                Заказать{" "}
                <span className="hidden md:inline-block">обратный звонок</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <span className="text-center flex justify-center items-center py-[10px] ">© 2011-2023 Городской Медицинский Центр. Все права защищены.</span>
    </>
  );
};

export default Footer;
