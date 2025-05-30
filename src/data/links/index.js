
export const services = [
  {
    id: "cardiology",
    name: "Kardiologiya",
    doctors: [
      { id: "d1", name: "Dr. Alimov" },
      { id: "d2", name: "Dr. Safarova" },
    ],
  },
  {
    id: "dermatology",
    name: "Dermatologiya",
    doctors: [
      { id: "d3", name: "Dr. Karimova" },
      { id: "d4", name: "Dr. Rahimov" },
    ],
  },
  {
    id: "pediatrics",
    name: "Pediatriya",
    doctors: [{ id: "d5", name: "Dr. To‘xtasinov" }],
  },
];

export const categories = [
  {
    title: "Направления",
    items: ["Акушерство", "Косметология", "Хирургия", "Мануальная терапия", "Психотерапия"],
    button: "Все услуги",
  },
  {
    title: "Диагностика",
    items: ["Ревматизм", "Подагра", "Артроз", "Склеродермия", "Васкулит турлари"],
    button: "Вся диагностика",
  },
  {
    title: "Врачи",
    items: ["Стоматолог", "Эндокринолог", "Хирург", "Терапевт", "Невролог"],
    button: "Все врачи",
  },
  {
    title: "Детство",
    items: ["Педиатр", "Стоматолог", "Дерматолог", "Офтальмолог", "Логопед"],
    button: "Все врачи",
  },
];


export const doctors = [
  {
    id: 1,
    image: "/images/doctors/doc-1.png",
    titleEn: "Yusupov Sunnatilla Abdumalikovich",
    titleRu: "Юсупов Суннатилла Абдумаликович",
    titleUz: "Yusupov Sunnatilla Abdumalikovich",
    specializationEn: "ENT specialist",
    specializationRu: "ЛОР",
    specializationUz: "LOR shifokori",
  },
  {
    id: 2,
    image: "images/doctors/doc-2.png",
    titleEn: "Akbarhodjaeva Munira Ramatkhojaevna",
    titleRu: "Акбарходажева Мунира Раматходжаевна",
    titleUz: "Akbarxo‘jayeva Munira Ramatxo‘jayevna",
    specializationEn: "Cardiorheumatologist. Pediatrician",
    specializationRu: "Кардирематолог. Педиатр",
    specializationUz: "Kardioromatolog. Pediatr",
  },
  {
    id: 3,
    image: "images/doctors/doc-4.png",
    titleEn: "Jalolhodjaeva Malika Kozimkhonovna",
    titleRu: "Жалолходжева Малика Козимхоновна",
    titleUz: "Jalolxo‘jayeva Malika Qozimxonovna",
    specializationEn: "Rheumatologist",
    specializationRu: "Ревматолог",
    specializationUz: "Revmatolog",
  },
  {
    id: 4,
    image: "images/doctors/doc-3.png",
    titleEn: "Mukhdinova Zulaykho Nurillaevna",
    titleRu: "Мухиддинова Зулайхо Нуриллаевна",
    titleUz: "Muxiddinova Zulayho Nurillayevna",
    specializationEn: "Ultrasound diagnostics",
    specializationRu: "УЗИ диагностики",
    specializationUz: "UZI diagnostikasi",
  },
];

export const servicesData = [
  {
    title: "Ревматизм: первичный приём",
    description:
      "При ревматизме ревматолог оценивает боли, отёки суставов и сердечные симптомы. Рекомендуются лабораторные и инструментальные обследования для диагностики.",
    slug: "ревматизм",
    image: "/images/services/service-hero-1.png",
  },
  {
    title: "Ревматоидный артрит: первичный приём",
    description:
      "При ревматоидном артрите основными симптомами являются боль, отёк и ограничение движений суставов. Ревматолог помогает с постановкой диагноза и планом лечения.",
    slug: "ревматоидный-артрит",
    image: "/images/services/service-hero-2.png",
  },
  {
    title: "Подагра: первичный приём",
    description:
      "При подагре наблюдаются внезапные боли и покраснения в суставах. Ревматолог назначает анализы и рекомендации по диете и лечению.",
    slug: "подагра",
    image: "/images/services/service-hero-3.png",
  },
  {
    title: "Артроз: первичный приём",
    description:
      "Артроз связан с повреждением суставов. Ревматолог рекомендует методы снижения боли, восстановление подвижности и лечение.",
    slug: "артроз",
    image: "/images/services/service-hero-4.png",
  },
  {
    title: "Системная красная волчанка: первичный приём",
    description:
      "СКВ — аутоиммунное заболевание, поражающее несколько органов. Ревматолог оценивает состояние кожи, суставов, почек и анализы крови.",
    slug: "системная-красная-волчанка",
    image: "/images/services/service-hero-5.png",
  },
  {
    title: "Болезнь Бехтерева: первичный приём",
    description:
      "При болезни Бехтерева происходит окостенение позвоночника. Ревматолог оценивает боль, скованность и ограничение дыхания для начала лечения.",
    slug: "болезнь-бехтерева",
    image: "/images/services/service-hero-6.png",
  },
  {
    title: "Склеродермия: первичный приём",
    description:
      "Склеродермия проявляется уплотнением кожи и внутренних органов. Ревматолог предлагает анализы и план лечения.",
    slug: "склеродермия",
    image: "/images/services/service-hero-7.png",
  },
  {
    title: "Фибромиалгия: первичный приём",
    description:
      "Фибромиалгия сопровождается общей болью, усталостью и бессонницей. Ревматолог оценивает состояние и рекомендует медикаменты и психоэмоциональную поддержку.",
    slug: "фибромиалгия",
    image: "/images/services/service-hero-8.png",
  },
  {
    title: "Васкулиты: первичный приём",
    description:
      "Васкулиты вызывают воспаление сосудов. Ревматолог оценивает общее состояние и результаты анализов для выбора направления лечения.",
    slug: "васкулиты",
    image: "/images/services/service-hero-5.png",
  },
];
