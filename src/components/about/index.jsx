import { useTranslation } from "react-i18next";

export const blogs = {
  ru: [
    {
      id: 1,
      title: "Кто находится в группе риска по глаукоме?",
      desc: "Глаукома — прогрессирующее заболевание...",
      image: "/images/services/service-hero-1.png",
    },
    {
      id: 2,
      title: "Как предотвратить развитие ретинопатии?",
      desc: "Диабетическая ретинопатия — это серьезное...",
      image: "/images/services/service-hero-2.png",
    },
    {
      id: 3,
      title: "Современные методы лечения катаракты",
      desc: "Катаракта — помутнение хрусталика...",
      image: "/images/services/service-hero-3.png",
    },
  ],
  uz: [
    {
      id: 1,
      title: "Glaukoma xavf guruhida kimlar bor?",
      desc: "Glaukoma — asta-sekin rivojlanadigan kasallik...",
      image: "/images/services/service-hero-1.png",
    },
    {
      id: 2,
      title: "Retinopatiya rivojlanishini qanday oldini olish mumkin?",
      desc: "Qandli diabet retinopatiyasi — jiddiy...",
      image: "/images/services/service-hero-2.png",
    },
    {
      id: 3,
      title: "Kataraktani davolash zamonaviy usullari",
      desc: "Katarakta — ko‘z linzasining xira bo‘lishi...",
      image: "/images/services/service-hero-3.png",
    },
  ],
  en: [
    {
      id: 1,
      title: "Who is at risk for glaucoma?",
      desc: "Glaucoma is a progressive eye disease...",
      image: "/images/services/service-hero-1.png",
    },
    {
      id: 2,
      title: "How to prevent the development of retinopathy?",
      desc: "Diabetic retinopathy is a serious condition...",
      image: "/images/services/service-hero-2.png",
    },
    {
      id: 3,
      title: "Modern methods of cataract treatment",
      desc: "Cataract is the clouding of the eye lens...",
      image: "/images/services/service-hero-3.png",
    },
  ],
};

const About = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const selectedBlogs = blogs[i18n.language] || "uz";

  // Bloglar massivini 3 marta takrorlash
  const repeatedBlogs = [...selectedBlogs, ...selectedBlogs, ...selectedBlogs];

  return (
    <section className="blog-section">
      <h1>
        {lang === "ru"
          ? "Блог от наших специалистов"
          : lang === "uz"
            ? "Mutaxassislarimiz blogi"
            : "Blog from our specialists"}
      </h1>
      <div className="marquee">
        <div className="marquee-container">
          <div className="blog-wrapper">
            {repeatedBlogs.map((blog, idx) => (
              <div className="blog-card" key={`${blog.id}-${idx}`}>
                <img src={blog.image} alt={blog.title} />
                <div className="card-content">
                  <h2>{blog.title}</h2>
                  <p>{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
