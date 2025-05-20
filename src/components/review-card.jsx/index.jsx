import React, { useState } from "react";

export const reviews = [
  {
    name: "Абдуллаев Жахонгир",
    date: "12 мая 2024",
    doctor: "Мухиддинова Зулайхо Нуриллаевна",
    text: "Очень благодарен доктору за внимательное отношение и профессионализм. После приёма почувствовал облегчение и получил чёткие рекомендации по лечению ревматизма.",
  },
  {
    name: "Юсупова Дилфуза",
    date: "18 апреля 2024",
    doctor: "Жалолходжева Малика Козимхоновна",
    text: "Доктор всё подробно объяснил, назначил анализы и схему лечения. Очень тёплая атмосфера на приёме, сразу чувствуется, что ты в надёжных руках.",
  },
  {
    name: "Хакимов Азизбек",
    date: "3 марта 2024",
    doctor: "Акбарходжаева Мунира Раматходжаевна",
    text: "Долго страдал от болей в суставах, но после визита сюда получил качественную консультацию и медикаментозную помощь. Спасибо специалистам центра!",
  },
  {
    name: "Каримова Шахноза",
    date: "20 февраля 2024",
    doctor: "Юсупов Суннатилла Абдумаликович",
    text: "Мне очень понравился приём! Всё объяснили понятно, отношение доброжелательное. Уже вижу улучшения после первого курса лечения.",
  },
  {
    name: "Махмудов Бехруз",
    date: "28 января 2024",
    doctor: "Мухиддинова Зулайхо Нуриллаевна",
    text: "Спасибо центру за квалифицированный подход. Диагностика прошла быстро и профессионально. Чувствую уверенность в дальнейшем лечении.",
  },
  {
    name: "Нуриева Зухра",
    date: "10 января 2024",
    doctor: "Жалолходжева Малика Козимхоновна",
    text: "Очень внимательный врач. До этого никто толком не мог поставить диагноз. Теперь знаю, что делать дальше. Спасибо за вашу работу!",
  },
  {
    name: "Ташпулатов Улугбек",
    date: "22 декабря 2023",
    doctor: "Акбарходжаева Мунира Раматходжаевна",
    text: "Компетентный и вежливый персонал. Все обследования были сделаны в день приёма. Очень удобно и быстро.",
  },
  {
    name: "Ибрагимова Гулрух",
    date: "8 декабря 2023",
    doctor: "Юсупов Суннатилла Абдумаликович",
    text: "Первый раз была у такого врача – впечатления самые положительные. Уделили достаточно времени, объяснили каждую деталь. Рекомендую.",
  },
  {
    name: "Саидов Абдурауф",
    date: "26 ноября 2023",
    doctor: "Мухиддинова Зулайхо Нуриллаевна",
    text: "Приятная атмосфера, грамотный врач и современное оборудование. Я доволен приёмом и обязательно продолжу лечение здесь.",
  },
  {
    name: "Насырова Рухшона",
    date: "5 ноября 2023",
    doctor: "Жалолходжева Малика Козимхоновна",
    text: "Пришла на приём с болью, уже после первой консультации стало легче. Врач подробно объяснила каждый шаг лечения. Спасибо!",
  },
  {
    name: "Камолов Бобур",
    date: "14 октября 2023",
    doctor: "Акбарходжаева Мунира Раматходжаевна",
    text: "Очень грамотный врач. На приёме чувствовал себя спокойно, получил полную информацию и рекомендации. Буду советовать знакомым.",
  },
  {
    name: "Хасанова Заррина",
    date: "30 сентября 2023",
    doctor: "Юсупов Суннатилла Абдумаликович",
    text: "На приёме врач был очень доброжелательным и отзывчивым. Всё прошло быстро и по делу. Благодарю за профессионализм!",
  },
];


const ITEMS_PER_PAGE = 5;

const ReviewCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

  const currentReviews = reviews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col gap-6">
        {currentReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl flex flex-col md:flex-row gap-6 p-6 border-b border-red-500"
          >
            <div className="md:w-1/4">
              <h3 className="font-semibold text-[18px] sm:text-[28px] text-gray-800">
                {review.name}
              </h3>
              <span className="text-sm sm:text-[17px] text-gray-500">{review.date}</span>
              <div className="flex text-yellow-500 text-[18px] my-2">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              {review.doctor && (
                <p className="text-sm md:text-[16px] text-gray-600">
                  <span className="font-medium text-gray-700">Shifokor: </span>
                  <span className="text-blue-600">{review.doctor}</span>
                </p>
              )}
            </div>
            <p className="md:w-3/4 text-gray-700 text-sm sm:text-[18px] mt-2 whitespace-pre-line">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          className="px-3 py-1 border border-red-500 outline-none hover:bg-red-600 hover:text-white text-red-500 rounded-full disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Oldingi
        </button>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 border border-none outline-none border-red-500 hover:bg-red-600 hover:text-white rounded-full ${
              currentPage === idx + 1 ? "bg-red-500 text-white" : "text-red-500"
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border-none outline-none border border-red-500 hover:bg-red-600 hover:text-white text-red-500 rounded-full disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Keyingi
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
