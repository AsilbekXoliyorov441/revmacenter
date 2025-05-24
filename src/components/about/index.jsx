import React from "react";

const blogs = [
  {
    id: 1,
    title: "Кто находится в группе риска по глаукоме?",
    desc: "Глаукома — прогрессирующее заболевание...",
    image: "/images/services/service-hero-1.png",
    author: "Савина Наталья",
    time: "5 минут на чтение",
    avatar: "/images/doctors/doc-1.png",
  },
  {
    id: 2,
    title: "Как предотвратить развитие ретинопатии?",
    desc: "Диабетическая ретинопатия — это серьезное...",
    image: "/images/services/service-hero-2.png",
    author: "Иван Иванов",
    time: "7 минут на чтение",
    avatar: "/images/doctors/doc-2.png",
  },
  {
    id: 3,
    title: "Современные методы лечения катаракты",
    desc: "Катаракта — помутнение хрусталика...",
    image: "/images/services/service-hero-3.png",
    author: "Ольга Смирнова",
    time: "6 минут на чтение",
    avatar: "/images/doctors/doc-3.png",
  },
];

const About = () => {
  const repeatedBlogs = [...blogs, ...blogs, ...blogs]; // 3 marta takrorlash

  return (
    <section className="blog-section">
      <h1>Блог от наших специалистов</h1>
      <div className="marquee">
        <div className="marquee-container">
          <div className="blog-wrapper">
            {repeatedBlogs.map((blog, idx) => (
              <div className="blog-card" key={`${blog.id}-${idx}`}>
                <img src={blog.image} alt={blog.title} />
                <div className="card-content">
                  <h2>{blog.title}</h2>
                  <p>{blog.desc}</p>l 
                  <div className="author">
                    <img src={blog.avatar} alt={blog.author} />
                    <div>
                      <p>{blog.author}</p>
                      <small>{blog.time}</small>
                    </div>
                  </div>
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
