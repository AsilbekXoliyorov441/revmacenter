import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data/links";
import { FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <footer className="bg-[#F0F6F9] pt-[30px] pb-[30px] mt-4">
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
              <li>
                <NavLink className="font-bold inline-block" to={"/"}>
                  {t("header.nav.home")}
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold inline-block  " to={"/services"}>
                  {t("header.nav.services")}
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold inline-block  " to={"/doctors"}>
                  {t("header.nav.doctors")}
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold inline-block  " to={"/reviews"}>
                  {t("header.nav.reviews")}
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold inline-block  " to={"/about"}>
                  {t("header.nav.about")}
                </NavLink>
              </li>
              <li>
                <NavLink className="font-bold inline-block  " to={"/contact"}>
                  {t("header.nav.contact")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-footer mt-[20px] xl:mt-[10px] container mx-auto  px-[20px]">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex  justify-between gap-[10px] sm:gap-[20px]">
            <li className="flex  flex-col gap-[15px] lg:gap-[10px]">
              <a
                href="https://wa.me/998998180111"
                className="flex item-center gap-[10px]"
              >
                <FaWhatsappSquare className="text-[22px] text-[#25D366]" />
                <span className="">
                  <span className="hidden sm:inline-block">{t("footer.writeTo")}</span>{" "}
                  Whatsapp
                </span>
              </a>
              <a
                href="https://t.me/revma_center_clinic"
                className="flex item-center gap-[10px]"
              >
                <FaTelegram className="text-[22px] text-blue-400" />

                <span className="">
                  <span className="hidden sm:inline-block">{t("footer.writeTo")}</span>{" "}
                  {t("footer.telegram")}
                </span>
              </a>
            </li>
            <li className="flex flex-col gap-[10px] sm:gap-0">
              <a
                className="text-[18px] sm:text-[18px] font-[500]"
                href="tel:+998998180111"
              >
                +998(99) 818-01-11
              </a>
              <a
                className="text-[18px] sm:text-[18px] font-[500]"
                href="tel:+998998180111"
              >
                +998(99) 818-01-11
              </a>
            </li>
            <li className=" flex-col gap-[12px]  flex">
              <a className="" href="#map">
                {t("header.location")} {t("header.address")}
              </a>
              <span className="flex text-[14px] sm:text-[16px] items-center gap-[5px]">
                {/* O‘zbek tilidagi jadval – xl dan kichik ekranlarda ko‘rinadi */}
                <span className="block">{t("header.weekday")}</span>
                <span className="block">{t("header.saturday")}</span>
              </span>
            </li>
            <li className=" lg:flex">
              <Link
                className=" max-w-[272px] lg:px-[20px] h-[46px] flex items-center justify-center bg-[#E3EFF5] rounded-[5px] "
                to="/contact"
              >
                {t("footer.callback")}
              </Link>
            </li>
            <li className="flex flex-col gap-[10px] sm:gap-0">
              <img
                className="w-[100px] h-[100px]"
                src="/krcode.png"
                alt="krcode"
              />
            </li>
          </ul>
        </div>
      </footer>
      <span className="text-center flex justify-center items-center py-[10px] ">
        {t("footer.text")}
      </span>
    </>
  );
};

export default Footer;
