import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";
const servicesData = [
  {
    titleUz: "Revmatizm: birlamchi qabul",
    titleRu: "Ревматизм: первичный приём",
    titleEn: "Rheumatism: initial consultation",
    contentUz:
      "Revmatizm — yurak, bo‘g‘imlar, teri va miyaning yallig‘lanish kasalligi. Birlamchi qabulda shikoyatlar o‘rganiladi, tahlillar buyuriladi va davolash rejalashtiriladi.",
    contentRu:
      "Ревматизм — это воспалительное заболевание, которое может поражать сердце, суставы, кожу и мозг. Первичный приём включает сбор анамнеза, оценку жалоб и направление на анализы для постановки диагноза и составления плана лечения.",
    contentEn:
      "Rheumatism is an inflammatory disease that may affect the heart, joints, skin, and brain. The initial consultation includes taking a history, assessing complaints, and recommending tests to make a diagnosis and create a treatment plan.",
  },
  {
    titleUz: "Revmatoyid artrit: birlamchi qabul",
    titleRu: "Ревматоидный артрит: первичный приём",
    titleEn: "Rheumatoid arthritis: initial consultation",
    contentUz:
      "Revmatoyid artrit — bu surunkali bo‘g‘im yallig‘lanishi. Qabulda vrach yallig‘lanish darajasini baholaydi, qon tahlili va rentgen buyuradi va davolash rejasini tuzadi.",
    contentRu:
      "Ревматоидный артрит — хроническое воспалительное заболевание суставов. На приёме врач оценивает степень воспаления, направляет на анализы крови и рентген, после чего разрабатывает индивидуальный план лечения.",
    contentEn:
      "Rheumatoid arthritis is a chronic inflammatory joint disease. During the consultation, the doctor evaluates the degree of inflammation, orders blood tests and X-rays, and develops an individual treatment plan.",
  },
  {
    titleUz: "Podagra: birlamchi qabul",
    titleRu: "Подагра: первичный приём",
    titleEn: "Gout: initial consultation",
    contentUz:
      "Podagra asosan bosh barmoq bo‘g‘imi og‘rishi bilan boshlanadi. Vrach sababchi omillarni aniqlaydi, siydik kislotasi darajasini o‘lchaydi va dori, dieta tavsiya qiladi.",
    contentRu:
      "Подагра проявляется внезапной болью в суставах, чаще всего в большом пальце ноги. Врач выявляет провоцирующие факторы, направляет на анализ уровня мочевой кислоты и рекомендует диету и препараты.",
    contentEn:
      "Gout usually begins with sudden joint pain, often in the big toe. The doctor identifies triggering factors, checks uric acid levels, and recommends diet and medications.",
  },
  {
    titleUz: "Artroz: birlamchi qabul",
    titleRu: "Артроз: первичный приём",
    titleEn: "Arthrosis: initial consultation",
    contentUz:
      "Artroz — bu bo‘g‘imlarning yemirilish kasalligi. Vrach zararlanish darajasini aniqlaydi, rentgen tayinlaydi va davolash usullarini tanlaydi.",
    contentRu:
      "Артроз — это дегенеративное заболевание суставов. На приёме врач выясняет степень поражения, назначает рентген и определяет тактику лечения, включая медикаментозную и немедикаментозную терапию.",
    contentEn:
      "Arthrosis is a degenerative joint disease. The doctor determines the extent of damage, orders X-rays, and chooses a treatment strategy, including medication and physical therapy.",
  },
  {
    titleUz: "Sistemali qizil yuguruk: birlamchi qabul",
    titleRu: "Системная красная волчанка: первичный приём",
    titleEn: "Systemic lupus erythematosus: initial consultation",
    contentUz:
      "SKY — murakkab autoimmun kasallik. Vrach qon va siydik tahlillarini tekshiradi, teri, bo‘g‘im, buyrak va boshqa organ holatini baholaydi va davolash rejasini tuzadi.",
    contentRu:
      "СКВ — сложное аутоиммунное заболевание. Ревматолог проводит осмотр, изучает анализы крови и мочи, оценивает состояние кожи, суставов, почек и других органов. Назначается комплексная терапия.",
    contentEn:
      "SLE is a complex autoimmune disease. The rheumatologist conducts an examination, reviews blood and urine tests, assesses the condition of skin, joints, kidneys, and other organs, and prescribes comprehensive therapy.",
  },
  {
    titleUz: "Behterev kasalligi: birlamchi qabul",
    titleRu: "Болезнь Бехтерева: первичный приём",
    titleEn: "Ankylosing spondylitis: initial consultation",
    contentUz:
      "Behterev kasalligi umurtqa yallig‘lanishi bilan kechadi. Vrach bel og‘rig‘i, harakat cheklanishini baholaydi va MRT yoki rentgen buyuradi.",
    contentRu:
      "Болезнь Бехтерева (анкилозирующий спондилит) характеризуется воспалением позвоночника. На первом приёме врач выявляет скованность движений, боли в пояснице и направляет на МРТ или рентген.",
    contentEn:
      "Ankylosing spondylitis involves inflammation of the spine. The doctor assesses back pain, stiffness, and orders MRI or X-rays.",
  },
  {
    titleUz: "Sklerodermiya: birlamchi qabul",
    titleRu: "Склеродермия: первичный приём",
    titleEn: "Scleroderma: initial consultation",
    contentUz:
      "Sklerodermiya — teri qalinlashuvi va ichki organlar zararlanishi bilan kechadigan kasallik. Vrach simptomlarni tahlil qiladi va kerakli testlarni tayinlaydi.",
    contentRu:
      "Склеродермия — это заболевание, вызывающее утолщение кожи и поражение внутренних органов. Ревматолог анализирует симптомы, оценивает кожные изменения и назначает лабораторные тесты.",
    contentEn:
      "Scleroderma causes thickening of the skin and internal organ damage. The doctor analyzes symptoms, examines skin changes, and orders lab tests.",
  },
  {
    titleUz: "Fibromialgiya: birlamchi qabul",
    titleRu: "Фибромиалгия: первичный приём",
    titleEn: "Fibromyalgia: initial consultation",
    contentUz:
      "Fibromialgiya — mushaklar va to‘qimalarda doimiy og‘riq sindromi. Vrach og‘riq, charchoq, uyqu va ruhiy holatni baholaydi.",
    contentRu:
      "Фибромиалгия — синдром хронической боли в мышцах и тканях. На приёме врач оценивает уровень боли, усталости, нарушения сна и психоэмоциональное состояние пациента для подбора терапии.",
    contentEn:
      "Fibromyalgia is a syndrome of chronic muscle and tissue pain. The doctor assesses pain, fatigue, sleep issues, and emotional condition to select therapy.",
  },
  {
    titleUz: "Vaskulitlar: birlamchi qabul",
    titleRu: "Васкулиты: первичный приём",
    titleEn: "Vasculitis: initial consultation",
    contentUz:
      "Vaskulitlar — qon tomirlarning yallig‘lanishidir. Vrach umumiy tekshiruv o‘tkazadi, qon tahlillari, UZI yoki biopsiya tayinlaydi va immunosupressiv davolashni tanlaydi.",
    contentRu:
      "Васкулиты — воспаления сосудов, которые могут поражать разные органы. Врач проводит осмотр, назначает анализы крови, УЗИ или биопсию и подбирает иммуносупрессивную терапию.",
    contentEn:
      "Vasculitis is inflammation of blood vessels, potentially affecting various organs. The doctor performs an examination, orders blood tests, ultrasound or biopsy, and selects immunosuppressive therapy.",
  },
];

const AccordionItem = ({ item, isOpen, onClick, lang }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const title = item[`title${lang}`];
  const content = item[`content${lang}`];

  return (
    <div
      className="bg-gradient-to-r from-[#2c0202] to-[#b20202] text-white rounded-lg px-4 py-3 cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] sm:text-[24px] md:text-[28px] font-[500] text-white">
          {title}
        </h3>
        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <p className="mt-2 text-[16px] sm:text-[16px] md:text-[18px] text-white">
          {content}
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openGlobalIndex, setOpenGlobalIndex] = useState(null);
  const { i18n } = useTranslation();
  const lang = i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1); // Uz, Ru, En

  const middleIndex = Math.ceil(servicesData.length / 2);
  const leftItems = servicesData.slice(0, middleIndex);
  const rightItems = servicesData.slice(middleIndex);

  const handleClick = (globalIndex) => {
    setOpenGlobalIndex(openGlobalIndex === globalIndex ? null : globalIndex);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-[10px] mx-auto px-[20px]">
      <div className="flex flex-col gap-[10px]">
        {leftItems.map((item, index) => {
          const globalIndex = index;
          return (
            <AccordionItem
              key={globalIndex}
              item={item}
              isOpen={openGlobalIndex === globalIndex}
              onClick={() => handleClick(globalIndex)}
              lang={lang}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-[10px]">
        {rightItems.map((item, index) => {
          const globalIndex = index + leftItems.length;
          return (
            <AccordionItem
              key={globalIndex}
              item={item}
              isOpen={openGlobalIndex === globalIndex}
              onClick={() => handleClick(globalIndex)}
              lang={lang}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
