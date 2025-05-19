export const links = [
  { text: "Направления", href: "/directions" },
  { text: "Услуги", href: "/services" },
  { text: "Врачи", href: "/doctors" },
  { text: "Отзывы", href: "/reviews" },
  { text: "Акции", href: "/promotions" },
  { text: "О центре", href: "/about" },
  { text: "Детство", href: "/childhood" },
  { text: "Контакты", href: "/contacts" },
];

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
    items: ["МРТ", "КТ", "УЗИ", "Рентген", "Гастроскопия"],
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
    firstName: "Юсупов Суннатилла",
    lastName: "Абдумаликович",
    specialization: "ЛОР",
    titleEn: "Юсупов Суннатилла Абдумаликович",
    titleRu: "Юсупов Суннатилла Абдумаликович",
    titleUz: "Юсупов Суннатилла Абдумаликович",
  },
  {
    id: 2,
    image: "images/doctors/doc-2.png",
    firstName: "Акбарходажева Мунира ",
    lastName: "Раматходжаевна",
    specialization: "Кардирематолог.Педиатр",
    titleEn: "Акбарходажева Мунира Раматходжаевна",
    titleRu: "Акбарходажева Мунира Раматходжаевна",
    titleUz: "Акбарходажева Мунира Раматходжаевна",
  },
  {
    id: 3,
    image: "images/doctors/doc-4.png",
    firstName: "Жалолходжева Малика",
    lastName: "Козимхоновна",
    specialization: "Ревматолог",
    titleEn: "Жалолходжева Малика Козимхоновна",
    titleRu: "Жалолходжева Малика Козимхоновна",
    titleUz: "Жалолходжева Малика Козимхоновна",
  },
  {
    id: 4,
    image: "images/doctors/doc-3.png",
    firstName: "Мухиддинова Зулайхо",
    lastName: "Нуриллаевна",
    specialization: "УЗИ диагностики",
    titleEn: "Мухиддинова Зулайхо Нуриллаевна",
    titleRu: "Мухиддинова Зулайхо Нуриллаевна",
    titleUz: "Мухиддинова Зулайхо Нуриллаевна",
  },
];
