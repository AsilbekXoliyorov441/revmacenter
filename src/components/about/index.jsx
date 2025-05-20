import React from "react";
import { Link } from "react-router-dom";

const aboutData = ["1", "2", "3 ", "4"];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[black] to-[#8e0c0c]  bg-cover bg-center pt-[60px] pb-[30px]"
    >
      <div className="container mx-auto px-[20px] pb-[30px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] sm:text-[28px]   md:text-[36px] lg:text-[42px] text-white">
            Блог от наших специалистов
          </h1>
          <Link
            to="#"
            className="relative  text-white bg-[orangered] inline-flex  items-center justify-center overflow-hidden rounded-[5px] max-w-[204px] h-[54px] w-full  font-medium  transition-colors duration-1000 group"
          >
            Читать все
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
          </Link>
        </div>
        <div className="mt-[30px] flex flex-col justify-center sm:flex-row  sm:grid grid-cols-2 lg:grid-cols-3 xl:flex items-center sm:justify-between gap-[20px]">
          {aboutData?.map((item) => (
            <div key={item} className="group relative mt-[30px] max-w-[350px] cursor-pointer">
              {/* Card wrapper – endi ko‘tarilmaydi */}
              <div className="rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-lg">
                {/* Image */}
                <img
                  src="/blog.png"
                  alt="doctor"
                  className="h-[186px] w-full object-cover"
                />

                {/* Content */}
                <div className="p-[20px]">
                  <h1 className="text-[22px] leading-[26px] text-white">
                    Кто находится в группе риска по глаукоме?
                  </h1>
                  <p className="mt-[5px] text-white leading-[22px]">
                    Глаукома — прогрессирующее заболевание, приводящее к
                    безвозвратной слепоте, в основе кото...
                  </p>

                  {/* Author */}
                  <div className="mt-[20px] flex items-center gap-[10px]">
                    <img
                      src="/images/doctors/doc-1.png"
                      alt="doctor"
                      className="h-[48px] w-[48px] rounded-full"
                    />
                    <div>
                      <h1 className="text-white">Савина Наталья</h1>
                      <p className="text-white text-sm">5 минут на чтение</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing red ring */}
              <span
                aria-hidden
                className="
      pointer-events-none
      absolute inset-0 rounded-lg
      border-2 border-transparent
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
      before:absolute before:inset-0 before:rounded-lg
      before:border-2 before:border-red-600/70
      before:blur-[3px]
      before:content-['']
      before:animate-spin-slow
    "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
