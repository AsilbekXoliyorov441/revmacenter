
export const services = [
  {
    id: "Иглотерапия",
    name: "Иглотерапия",
    doctors: [{ id: "d1", name: "иглотерапевт" }],
  },
  {
    id: "Массаж",
    name: "Массаж",
    doctors: [{ id: "d3", name: "Массажист" }],
  },
  {
    id: "Физиотерапия",
    name: "Физиотерапия",
    doctors: [{ id: "d5", name: "Физиотерапевт" }],
  },
  {
    id: "Озонотерапия",
    name: "Озонотерапия",
    doctors: [{ id: "d5", name: "Озонотерапевт" }],
  },
];

export const categories = {
  ru: [
    {
      title: "Направления",
      items: [
        "Ревматология",
        "Кардиоревматология",
        "Педиатрия",
        "Невралогия",
        "Лор",
        "Ортопедия ва травматология",
      ],
      button: "Все услуги",
    },
    {
      title: "Диагностика",
      items: [
        "Лабораторные анализы.",
        "Гормональные исследование",
        "УЗИ",
        "ЭКГ",
        "ЭХО кг",
        "Рентген",
        "Нейросонография",
      ],
      button: "Вся диагностика",
    },
  ],

  uz: [
    {
      title: "Yo‘nalishlar",
      items: [
        "Revmatologiya",
        "Kardiorevmatologiya",
        "Pediatriya",
        "Nevrologiya",
        "LOR",
        "Ortopediya va travmatologiya",
      ],
      button: "Barcha xizmatlar",
    },
    {
      title: "Diagnostika",
      items: [
        "Laborator tahlillar",
        "Gormon tekshiruvlari",
        "UZI",
        "EKG",
        "EHO KG",
        "Rentgen",
        "Neyrosonografiya",
      ],
      button: "Barcha diagnostika",
    },
  ],

  en: [
    {
      title: "Departments",
      items: [
        "Rheumatology",
        "Cardiorheumatology",
        "Pediatrics",
        "Neurology",
        "ENT",
        "Orthopedics and Traumatology",
      ],
      button: "All services",
    },
    {
      title: "Diagnostics",
      items: [
        "Laboratory tests",
        "Hormonal tests",
        "Ultrasound (USG)",
        "ECG",
        "Echo CG",
        "X-ray",
        "Neurosonography",
      ],
      button: "All diagnostics",
    },
  ],
};


export const doctors = [
  {
    id: 1,
    image: "/unknown.webp",
    titleEn: "Yusupov Sunnatilla Abdumalikovich",
    titleRu: "Юсупов Суннатилла Абдумаликович",
    titleUz: "Yusupov Sunnatilla Abdumalikovich",
    specializationEn: "ENT specialist",
    specializationRu: "ЛОР",
    specializationUz: "LOR shifokori",
  },
  {
    id: 2,
    image: "/unknown.webp",
    titleEn: "Akbarhodjaeva Munira Ramatkhojaevna",
    titleRu: "Акбарходажева Мунира Раматходжаевна",
    titleUz: "Akbarxo‘jayeva Munira Ramatxo‘jayevna",
    specializationEn: "Cardiorheumatologist. Pediatrician",
    specializationRu: "Кардирематолог. Педиатр",
    specializationUz: "Kardioromatolog. Pediatr",
  },
  {
    id: 3,
    image: "/unknown.webp",
    titleEn: "Jalolhodjaeva Malika Kozimkhonovna",
    titleRu: "Жалолходжева Малика Козимхоновна",
    titleUz: "Jalolxo‘jayeva Malika Qozimxonovna",
    specializationEn: "Rheumatologist",
    specializationRu: "Ревматолог",
    specializationUz: "Revmatolog",
  },
  {
    id: 4,
    image: "/unknown.webp",
    titleEn: "Mukhdinova Zulaykho Nurillaevna",
    titleRu: "Мухиддинова Зулайхо Нуриллаевна",
    titleUz: "Muxiddinova Zulayho Nurillayevna",
    specializationEn: "Ultrasound diagnostics",
    specializationRu: "УЗИ диагностики",
    specializationUz: "UZI diagnostikasi",
  },

  {
    id: 5,
    image: "/unknown.webp",
    titleEn: "Магдиева Муборак",
    titleRu: "Магдиева Муборак",
    titleUz: "Магдиева Муборак",
    specializationEn: "Педиатр",
    specializationRu: "Педиатр",
    specializationUz: "Педиатр",
  },
];

export const servicesData = [
  {
    titleuz: "Ozonoterapiya",
    titleru: "Озонотерапия",
    titleen: "Ozone Therapy",
    descriptionuz:
      "Ozonoterapiya — bu yallig‘lanishga qarshi, antibakterial va immunitetni rag‘batlantiruvchi xususiyatlarga ega ozondan foydalaniladigan davolash usuli.",
    descriptionru:
      "Озонотерапия — это метод лечения с использованием озона, обладающего противовоспалительными, антибактериальными и иммуномодулирующими свойствами.",
    descriptionen:
      "Ozone therapy is a treatment method using ozone, which has anti-inflammatory, antibacterial, and immunomodulatory properties.",
    image: "/images/services/service-hero-1.png",
  },
  {
    titleuz: "Fizioterapiya",
    titleru: "Физиотерапия",
    titleen: "Physiotherapy",
    descriptionuz:
      "Fizioterapiya organizm funksiyalarini davolash va tiklash uchun fizik omillar (issiqlik, sovuq, tok, ultratovush) qo‘llanilishini o‘z ichiga oladi.",
    descriptionru:
      "Физиотерапия включает в себя применение физических факторов (тепло, холод, ток, ультразвук) для лечения и восстановления функций организма.",
    descriptionen:
      "Physiotherapy involves the use of physical factors (heat, cold, electricity, ultrasound) for treatment and restoration of body functions.",
    image: "/images/services/service-hero-2.png",
  },
  {
    titleuz: "Massaj",
    titleru: "Массаж",
    titleen: "Massage",
    descriptionuz:
      "Massaj qon aylanishini yaxshilaydi, mushaklardagi zo‘riqishni kamaytiradi va organizmni umumiy tinchlantirish hamda tiklanishiga yordam beradi.",
    descriptionru:
      "Массаж улучшает кровообращение, снимает напряжение мышц и способствует общему расслаблению и восстановлению организма.",
    descriptionen:
      "Massage improves blood circulation, relieves muscle tension, and promotes overall relaxation and recovery of the body.",
    image: "/images/services/service-hero-3.png",
  },
  {
    titleuz: "Ignaterapiya",
    titleru: "Иглотерапия",
    titleen: "Acupuncture",
    descriptionuz:
      "Ignaterapiya (akupunktura) — bu qadimiy davolash usuli bo‘lib, biologik faol nuqtalarga nozik ignalarni kiritish orqali amalga oshiriladi.",
    descriptionru:
      "Иглотерапия (акупунктура) — это древний метод лечения с помощью введения тонких игл в биологически активные точки тела.",
    descriptionen:
      "Acupuncture is an ancient treatment method that involves inserting fine needles into biologically active points of the body.",
    image: "/images/services/service-hero-4.jpg",
  },
];
