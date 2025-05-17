import { Link } from "react-router-dom";
import { categories } from "../../data/links"
export default function Hero() {
    return (
        <section>
            <div className="relative">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                >
                    <source src="/fon.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay gradient if needed */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-[#780606]/80 z-0"></div>


                {/* Foreground Content */}
                <div className="relative text-white px-8 z-10">
                    <div className="container mx-auto flex flex-col md:flex-row items-end md:items-center gap-10 pt-16">
                        <div className="w-full md:w-1/2 md:pb-[150px]">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Позаботьтесь о своём здоровье
                            </h1>
                            <p className="text-lg mb-6 md:w-[550px]">
                                Осуществляем комплексное медицинское обслуживание населения:
                                консультации и амбулаторное лечение у специалистов всех
                                направлений, медицинские обследования и диагностические процедуры.
                            </p>
                            <button className="bg-white text-red-600 hover:bg-red-100 font-semibold py-3 px-6 rounded-md transition">
                                Записаться
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src="/doctor.png"
                                alt="Doctor"
                                className="w-[300px] md:w-[460px] object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Cards */}
            </div>
            <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-20px] md:mt-[-65px] relative z-10">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-blue-50 rounded-lg p-6 shadow-sm flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-3 border-b pb-2">
                                {category.title}
                            </h3>
                            <ul className="text-gray-800 space-y-1 mb-6">
                                {category.items.map((item, idx) => (
                                    <li className="mb-4" key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <Link
                            to="/contact"
                            className="relative inline-flex  items-center justify-center overflow-hidden rounded-[5px] bg-[#111E52] px-4 py-2 font-medium text-white transition-colors duration-1000 group"
                        >
                            Запись на приём
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>

    );
}
