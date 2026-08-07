import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "../common/Card";

function ProjectSection() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null);

  const projects = [
    {
      id: 1,
      image: "language_app.jpg",
      title: t("projects.language_app.title"),
      description: t("projects.language_app.description"),
      viewLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      image: "pdf_reader.jpg",
      title: t("projects.pdf_reader.title"),
      description: t("projects.pdf_reader.description"),
      viewLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      image: "commitment_tracker.jpg",
      title: t("projects.commitment_tracker.title"),
      description: t("projects.commitment_tracker.description"),
      viewLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      image: "interview_prep.jpg",
      title: t("projects.interview_prep.title"),
      description: t("projects.interview_prep.description"),
      viewLink: "#",
      codeLink: "#",
    },
  ];

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section id="Projects">
      <div className="projects-container">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {t("projects.title")}
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false, // Défilement de droite à gauche
          }}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                onClick={() => handleCardClick(project.id)}
                className={activeCard === project.id ? "active" : ""}
              >
                <Card
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  viewLink={project.viewLink}
                  codeLink={project.codeLink}
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectSection;
