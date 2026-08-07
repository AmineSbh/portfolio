import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "../common/Card";
import { projects } from "../../data/projects";

function ProjectSection() {
  const { t } = useTranslation();

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
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // `loop` exige au moins deux fois plus de slides que n'en affiche le
          // plus large breakpoint (3) ; avec 4 projets Swiper le refuse et
          // journalise un avertissement. `rewind` revient au premier slide
          // sans dupliquer de slides.
          loop={false}
          rewind
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Card
                Icon={project.Icon}
                title={t(project.titleKey)}
                description={t(project.descriptionKey)}
                tags={project.tags}
                viewLink={project.viewLink}
                codeLink={project.codeLink}
                viewLabel={t("projects.view")}
                codeLabel={t("projects.code")}
              />
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
