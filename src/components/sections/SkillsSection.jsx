import { useTranslation } from 'react-i18next';
import { FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiApachespark, SiPolars, SiSnowflake, SiGithubactions, SiLangchain, SiFastapi, SiOpenai } from 'react-icons/si';

function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="Skills">
      <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">{t('skills.title')}</h2>

      <div className="skills-container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">

        {/* Data Engineering */}
        <div className="skills-category">
          <h3>{t('skills.categories.programming')}</h3>

          <div className="skill">
            <FaPython size={40} color="#FFD700" />
            <p>Python</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="skill">
            <SiApachespark size={40} color="#E25A1C" />
            <p>PySpark</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="skill">
            <SiPolars size={40} color="#CD792C" />
            <p>Polars</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="skill">
            <SiSnowflake size={40} color="#29B5E8" />
            <p>SQL / Snowflake</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="skills-category">
          <h3>{t('skills.categories.certifications')}</h3>

          <div className="skill">
            <FaAws size={40} color="#FF9900" />
            <p>AWS (S3, Lambda)</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="skill">
            <FaDocker size={40} color="#2496ED" />
            <p>Docker</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="skill">
            <SiGithubactions size={40} color="#2088FF" />
            <p>CI/CD (GitHub Actions)</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="skill">
            <FaGitAlt size={40} color="#F1502F" />
            <p>Git</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        {/* IA & Modern Stack */}
        <div className="skills-category">
          <h3>{t('skills.categories.development')}</h3>

          <div className="skill">
            <SiLangchain size={40} color="#1C3C3C" />
            <p>LangChain / RAG</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="skill">
            <SiOpenai size={40} color="#00A67E" />
            <p>OpenAI API</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="skill">
            <SiFastapi size={40} color="#009688" />
            <p>FastAPI</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="skill">
            <FaAws size={40} color="#FF9900" />
            <p>Vector DB (Supabase)</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
