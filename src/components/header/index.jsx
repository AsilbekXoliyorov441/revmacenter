import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { links } from "../../data/links";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <header className="bg-[#FCFCFC] fixed top-0 w-full px-[20px] pb-[10px] z-[1000]">
        <nav
          id="header-top"
          className="flex items-center justify-between gap-[20px] container mx-auto"
        >
          <Link
            className="w-[220px] sm:max-w-[300px]   h-[73px] flex items-center"
            to={"/"}
          >
            <img className="w-full" src="/LOGO.svg" alt="logo" loading="lazy" />
          </Link>
          <ul className="flex items-center gap-[20px] lg:gap-[60px]">
            <li className=" sm:flex  flex-col sm:w-[170px]">
              <a className=" text-[18px] font-bold" href="tel:+998998180111">
                <span className="hidden sm:inline-block">
                  +998(99) 818-01-11
                </span>
                <span className="sm:hidden">
                  <FaPhoneFlip />
                </span>
              </a>
              <a
                href="https://wa.me/998998180111"
                className="hidden sm:flex item-center gap-[10px]"
              >
                <FaWhatsappSquare className="text-[22px] text-[#25D366]" />
                <span className="">Whatsapp</span>
              </a>
            </li>
            <li className=" flex-col hidden xl:flex">
              <a href="mailto:revmacenter01@gmail.com" className="">
                revmacenter01@gmail.com
              </a>
              <Link to="/contact" className=" ">
                Заказать звонок
              </Link>
            </li>

            <li className=" flex-col hidden xl:flex">
              <a className="" href="/">
                Кибрайский район
              </a>
              <a href="/" className=" ">
                Университетская ул., 5/1.
              </a>
            </li>

            <li className="hidden flex-col xl:flex">
              {/* O‘zbek tilidagi jadval – xl dan kichik ekranlarda ko‘rinadi */}
              <span className="block">понедельник-пятница 08:00‑18:00</span>
              <span className="block">cуббота: 08:00‑14:00</span>
            </li>

            <li className="hidden md:flex lg:hidden">
              <Link
                className="w-[196px] h-[46px] flex items-center justify-center bg-[#111E52] rounded-[5px] text-white"
                to="/contact"
              >
                Запись на приём
              </Link>
            </li>

            <li onClick={toggleMenu} className="flex items-center gap-[5px]">
              <button
                className={`menu-btn lg:hidden ${isOpen ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </li>
          </ul>
        </nav>

        <nav
          id="header-bottom"
          className="container shadow-md  mx-auto h-[60px] hidden lg:flex items-center justify-between rounded-[5px] px-[20px]  bg-[white]"
        >
          <ul className="flex items-center lg:gap-[30px] xl:gap-[60px]">
            <li>
              <NavLink
                className="font-bold inline-block text-[#017CC1] "
                to={"/"}
              >
                Главный
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold inline-block  " to={"/services"}>
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold inline-block  " to={"/doctors"}>
                Врачи
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold inline-block  " to={"/reviews"}>
                Отзывы
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold inline-block  " to={"/about"}>
                О центре
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold inline-block  " to={"/contact"}>
                Контакты
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center gap-[10px]">
            <li>
              <Link
                to="/contact"
                className="relative inline-flex w-[196px] h-[46px] items-center justify-center overflow-hidden rounded-[5px] bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-1000 group"
              >
                Запись на приём
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      /*Responsive header */
      <div
        className={`
        fixed top-[83px] lg:top-[143px] w-full z-50 
        bg-[#FFD9D9] transition-all duration-300 ease-in-out 
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      >
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-[10px] lg:pl-[100px] container mx-auto items-center gap-[20px] lg:gap-[60px]">
          <li className="flex md:flex-col  gap-[10px]">
            <a className=" text-[18px] font-bold" href="tel:+998998180111">
              +998(99) 818-01-11
            </a>
            <a
              href="https://wa.me/998180111"
              className="flex item-center gap-[10px]"
            >
              <FaWhatsappSquare className="text-[22px] text-[#25D366]" />
              <span>Whatsapp</span>
            </a>
          </li>
          <li className="flex md:flex-col gap-[10px] xl:flex">
            <a href="mailto:revmacenter01@gmail.com" className="">
              revmacenter01@gmail.com
            </a>
            <Link onClick={() => setIsOpen(false)} to="/contact" className=" ">
              Заказать звонок
            </Link>
          </li>
          <li className="flex md:flex-col gap-[10px] xl:flex">
            <a href="/">Кибрайский район,</a>
            <a href="/">Университетская ул., 5/1.</a>
          </li>
          <li className="flex flex-col gap-[10px]">
              {/* O‘zbek tilidagi jadval – xl dan kichik ekranlarda ko‘rinadi */}
              <span className="block">понедельник-пятница: 08:00‑18:00</span>
              <span className="block">cуббота: 08:00‑14:00</span>
          </li>
        </ul>

        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 lg:hidden p-[10px] lg:pl-[100px] container mx-auto items-center gap-[20px]">
          {links.map(({ text, href }, idx) => (
            <li key={idx}>
              <NavLink
              onClick={() => setIsOpen(false)}
              className="font-bold ml-[10px] inline-block" to={href}>
                {text}
              </NavLink>
            </li>
          ))}

          <li>
            <Link
              to="/contact"
              className="max-w-[140px] md:w-[300px] h-[46px] flex items-center justify-center bg-[#111E52] rounded-[5px] text-white"
            >
              <span className="hidden sm:block">Запись на приём</span>
              <span className="block sm:hidden">Записаться</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
