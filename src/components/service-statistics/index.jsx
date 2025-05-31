import React from "react";
import { useTranslation } from "react-i18next";

const serviceDataStatistic = {
  uz: [
    {
      number: "10+",
      title: "Yildan ortiq sog‘lig‘ingizni asraymiz",
      description:
        "Biz 10 yildan ortiq vaqtdan beri sifatli tibbiy xizmat ko‘rsatib, har bir bemorga e’tibor bilan yondashamiz.",
    },
    {
      number: "50+",
      title: "Malakali mutaxassislar",
      description:
        "Jamoamiz turli sohalardagi tajribali va sertifikatlangan shifokorlardan iborat.",
    },
    {
      number: "100+",
      title: "Tibbiy xizmatlar barcha yo‘nalishlarda",
      description:
        "Diagnostikadan tortib, kompleks davolashgacha keng xizmatlar spektrini taklif etamiz.",
    },
    {
      number: "1 kun",
      title: "Kerakli shifokor qabuliga kunning o‘zida yoziling",
      description:
        "Siz kerakli mutaxassisga kutmasdan, murojaat qilgan kunning o‘zida qabulga yozilishingiz mumkin.",
    },
  ],
  ru: [
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
  ],
  en: [
    {
      number: "10+",
      title: "Years of caring for your health",
      description:
        "For over 10 years, we have been providing quality medical care and taking care of every patient.",
    },
    {
      number: "50+",
      title: "Qualified specialists",
      description:
        "Our team consists of experienced and certified doctors from various specialties.",
    },
    {
      number: "100+",
      title: "Medical services in all directions",
      description:
        "We offer a wide range of services — from diagnostics to comprehensive treatment.",
    },
    {
      number: "1 day",
      title: "Same-day appointments with any specialist",
      description:
        "You can see the right specialist on the same day without waiting.",
    },
  ],
};

const ServiceStatistics = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "uz";
  const data = serviceDataStatistic[currentLang] || serviceDataStatistic["uz"];

  return (
    <div className="container mx-auto px-[20px]">
      <div className="grid grid-cols-2 bg-gradient-to-r from-[#F0F6F9] to-[#F0F6F9] p-[20px] sm:p-[30px] xl:p-[60px] md:gap-[50px] lg:grid-cols-4 gap-[10px] rounded-[12px]">
        {data.map((item, index) => (
          <div key={index} className="nth-[1]:mb-[30px] lg:mb-0">
            <img src="/cross.svg" alt="cross" />
            <span className="inline-block text-[22px] font-bold mt-[10px] text-[#017CC1]">
              {item.number}
            </span>
            <p className="text-[14px] lg:text-[16px] max-w-[260px]">
              {item.title}
            </p>
            {/* Optional: Uncomment to show description */}
            {/* <p className="text-[13px] text-gray-500">{item.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStatistics;
