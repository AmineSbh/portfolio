import { useTranslation } from 'react-i18next';
import { FaDatabase, FaRobot, FaCloud } from 'react-icons/fa';

function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <FaDatabase size={50} color="#077b32" />,
      title: t('services.webdev.title'),
      description: t('services.webdev.description'),
    },
    {
      id: 2,
      icon: <FaRobot size={50} color="#077b32" />,
      title: t('services.bots.title'),
      description: t('services.bots.description'),
    },
    {
      id: 3,
      icon: <FaCloud size={50} color="#077b32" />,
      title: t('services.scraping.title'),
      description: t('services.scraping.description'),
    },
  ];

  return (
    <section id="Services">
      <div className="services-container">
        <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {t('services.title')}
        </h2>

        <div className="services-list" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
