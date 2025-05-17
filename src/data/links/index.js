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
