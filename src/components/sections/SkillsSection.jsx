import { useTranslation } from 'react-i18next';
import { FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import {
  SiApachespark,
  SiPolars,
  SiSnowflake,
  SiGithubactions,
  SiLangchain,
  SiFastapi,
  SiOpenai,
  SiSupabase,
} from 'react-icons/si';

// Les 12 blocs étaient auparavant copiés-collés en JSX ; les données sont
// désormais déclaratives et le rendu est unique.
const categories = [
  {
    id: 'data_engineering',
    skills: [
      { name: 'Python', Icon: FaPython, color: '#FFD700', level: 95 },
      { name: 'PySpark', Icon: SiApachespark, color: '#E25A1C', level: 90 },
      { name: 'Polars', Icon: SiPolars, color: '#CD792C', level: 85 },
      { name: 'SQL / Snowflake', Icon: SiSnowflake, color: '#29B5E8', level: 90 },
    ],
  },
  {
    id: 'cloud_devops',
    skills: [
      { name: 'AWS (S3, Lambda)', Icon: FaAws, color: '#FF9900', level: 90 },
      { name: 'Docker', Icon: FaDocker, color: '#2496ED', level: 85 },
      { name: 'CI/CD (GitHub Actions)', Icon: SiGithubactions, color: '#2088FF', level: 85 },
      { name: 'Git', Icon: FaGitAlt, color: '#F1502F', level: 90 },
    ],
  },
  {
    id: 'ai_stack',
    skills: [
      { name: 'LangChain / RAG', Icon: SiLangchain, color: '#4ac2a8', level: 85 },
      { name: 'OpenAI API', Icon: SiOpenai, color: '#00A67E', level: 80 },
      { name: 'FastAPI', Icon: SiFastapi, color: '#009688', level: 80 },
      { name: 'Vector DB (Supabase)', Icon: SiSupabase, color: '#3ECF8E', level: 75 },
    ],
  },
];

function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="Skills">
      <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        {t('skills.title')}
      </h2>

      <div
        className="skills-container"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        {categories.map((category) => (
          <div className="skills-category" key={category.id}>
            <h3>{t(`skills.categories.${category.id}`)}</h3>

            {category.skills.map(({ name, Icon, color, level }) => (
              <div className="skill" key={name}>
                <Icon size={40} color={color} aria-hidden="true" />
                <p>{name}</p>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label={name}
                  aria-valuenow={level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuetext={t('a11y.skillLevel', { level })}
                >
                  <div className="progress" style={{ width: `${level}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
