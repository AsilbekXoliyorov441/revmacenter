import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const servicesData = [
  {
    title: "Ревматизм: первичный приём",
    content:
      "Ревматизм — это воспалительное заболевание, которое может поражать сердце, суставы, кожу и мозг. Первичный приём включает сбор анамнеза, оценку жалоб и направление на анализы для постановки диагноза и составления плана лечения.",
  },
  {
    title: "Ревматоидный артрит: первичный приём",
    content:
      "Ревматоидный артрит — хроническое воспалительное заболевание суставов. На приёме врач оценивает степень воспаления, направляет на анализы крови и рентген, после чего разрабатывает индивидуальный план лечения.",
  },
  {
    title: "Подагра: первичный приём",
    content:
      "Подагра проявляется внезапной болью в суставах, чаще всего в большом пальце ноги. Врач выявляет провоцирующие факторы, направляет на анализ уровня мочевой кислоты и рекомендует диету и препараты.",
  },
  {
    title: "Артроз: первичный приём",
    content:
      "Артроз — это дегенеративное заболевание суставов. На приёме врач выясняет степень поражения, назначает рентген и определяет тактику лечения, включая медикаментозную и немедикаментозную терапию.",
  },
  {
    title: "Системная красная волчанка: первичный приём",
    content:
      "СКВ — сложное аутоиммунное заболевание. Ревматолог проводит осмотр, изучает анализы крови и мочи, оценивает состояние кожи, суставов, почек и других органов. Назначается комплексная терапия.",
  },
  {
    title: "Болезнь Бехтерева: первичный приём",
    content:
      "Болезнь Бехтерева (анкилозирующий спондилит) характеризуется воспалением позвоночника. На первом приёме врач выявляет скованность движений, боли в пояснице и направляет на МРТ или рентген.",
  },
  {
    title: "Склеродермия: первичный приём",
    content:
      "Склеродермия — это заболевание, вызывающее утолщение кожи и поражение внутренних органов. Ревматолог анализирует симптомы, оценивает кожные изменения и назначает лабораторные тесты.",
  },
  {
    title: "Фибромиалгия: первичный приём",
    content:
      "Фибромиалгия — синдром хронической боли в мышцах и тканях. На приёме врач оценивает уровень боли, усталости, нарушения сна и психоэмоциональное состояние пациента для подбора терапии.",
  },
  {
    title: "Васкулиты: первичный приём",
    content:
      "Васкулиты — воспаления сосудов, которые могут поражать разные органы. Врач проводит осмотр, назначает анализы крови, УЗИ или биопсию и подбирает иммуносупрессивную терапию.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="bg-gradient-to-r from-[#2c0202] to-[#b20202] text-white rounded-lg px-4 py-3 cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] sm:text-[24px] md:text-[28px] font-[500] text-white">
          {item.title}
        </h3>
        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
        style={{
          maxHeight: `${height}px`,
        }}
      >
        <p className="mt-2 text-[16px] sm:text-[16px] md:text-[18px] text-white">
          {item.content}
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openGlobalIndex, setOpenGlobalIndex] = useState(null);

  // Ikkita ustunga bo‘lamiz
  const middleIndex = Math.ceil(servicesData.length / 2);
  const leftItems = servicesData.slice(0, middleIndex);
  const rightItems = servicesData.slice(middleIndex);

  const handleClick = (globalIndex) => {
    setOpenGlobalIndex(openGlobalIndex === globalIndex ? null : globalIndex);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-[10px] mx-auto px-[20px]">
      {/* Chap ustun */}
      <div className="flex flex-col gap-[10px]">
        {leftItems.map((item, index) => {
          const globalIndex = index;
          return (
            <AccordionItem
              key={globalIndex}
              item={item}
              isOpen={openGlobalIndex === globalIndex}
              onClick={() => handleClick(globalIndex)}
            />
          );
        })}
      </div>

      {/* O‘ng ustun */}
      <div className="flex flex-col gap-[10px]">
        {rightItems.map((item, index) => {
          const globalIndex = index + leftItems.length;
          return (
            <AccordionItem
              key={globalIndex}
              item={item}
              isOpen={openGlobalIndex === globalIndex}
              onClick={() => handleClick(globalIndex)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
