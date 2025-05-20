import React from "react";

const ServiceDataStatistic = [
  {
    number: "10+",
    title: "Лет заботы о вашем здоровье",
    description:
      "Более 10 лет мы обеспечиваем качественное медицинское обслуживание и заботимся о каждом пациенте.",
  },
  {
    number: "50+",
    title: "Квалифицированных специалистов",
    description:
      "Наша команда состоит из опытных и сертифицированных врачей различных специальностей.",
  },
  {
    number: "100+",
    title: "Медицинских услуг по всем направлениям",
    description:
      "Предлагаем широкий спектр услуг — от диагностики до комплексного лечения.",
  },
  {
    number: "1 день",
    title: "Прием врача любой специальности в день обращения",
    description:
      "Вы можете попасть к нужному специалисту в день обращения — без ожидания.",
  },
];


const ServiceStatistics = () => {
  return (
    <div className="container mx-auto px-[20px]">
      <div className="grid grid-cols-2 bg-gradient-to-r from-[#F0F6F9] to-[#F0F6F9] p-[20px] sm:p-[30px] xl:p-[60px]   md:gap-[50px] lg:grid-cols-4 gap-[10px] rounded-[12px]">
        {ServiceDataStatistic?.map((item) => (
          <div className="nth-[1]:mb-[30px] lg:mb-0">
            <img src="/cross.svg" alt="cross" />
            <span className="inline-block text-[22px] font-bold mt-[10px] text-[#017CC1]">
              {item?.number}
            </span>
            <p className="text-[14px] lg:text-[16px] max-w-[260px]">{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStatistics;
