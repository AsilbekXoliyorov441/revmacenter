import React from "react";
import { Link } from "react-router-dom";
import ReviewCard from "../../components/review-card.jsx";

const ReviewsPage = () => {
  return (
    <>
      <section id="review-hero" className="pt-[60px] md:pt-[120px]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#EFF5F9]/80 to-[#EFF5F9]/80 h-[249px] overflow-hidden">
          <div className="container mx-auto h-full px-[20px] ">
            {/* Text Content */}
            <div className="z-10 relative flex flex-col h-full justify-between">
              <div className="text-xs sm:text-sm text-gray-600 pt-4 sm:pt-6">
                <Link href="/" className="hover:text-blue-600 cursor-pointer">
                  Главная
                </Link>
                <span className="mx-2">/</span>
                <span className="text-blue-600">Отзывы</span>
              </div>
              <h1 className="text-2xl mb-[10px] ml-[10px] animate-bounce sm:animate-none sm:ml-0 sm:text-3xl font-bold text-gray-800 pb-4 sm:pb-6">
                Отзывы
              </h1>
              <Link
                to="/contact"
                className="relative mb-[20px] max-w-[300px] h-[54px] inline-flex  items-center justify-center overflow-hidden rounded-[5px] bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-1000 group"
              >
                Запись на приём
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
              </Link>
            </div>

            {/* Doctor Image - Hidden on small screens, shown on medium and up */}
            <img
              src="/review.png"
              alt="doctor"
              className="block absolute bottom-0 right-0 object-left sm:object-center object-cover h-full md:h-auto"
            />
          </div>
        </div>
      </section>
      <section id="all-reviews">
        <ReviewCard />
      </section>
    </>
  );
};

export default ReviewsPage;
