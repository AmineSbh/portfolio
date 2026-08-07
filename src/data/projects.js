import { FaDatabase, FaChartLine } from "react-icons/fa";
import { SiLangchain, SiOpenai } from "react-icons/si";

/**
 * Projets affichés dans la section « Projets R&D ».
 *
 * `titleKey` / `descriptionKey` renvoient vers src/locales/{fr,en}/translation.json.
 * `viewLink` et `codeLink` sont facultatifs : un bouton n'est rendu que si son
 * lien est renseigné, ce qui évite les liens morts en attendant les URLs.
 */
export const projects = [
  {
    id: "rag_assistant",
    Icon: SiLangchain,
    titleKey: "projects.rag_assistant.title",
    descriptionKey: "projects.rag_assistant.description",
    tags: ["LangChain", "Supabase", "RAG", "Docker"],
    // TODO: renseigner les URLs réelles (ex. https://github.com/AmineSbh/...)
    viewLink: null,
    codeLink: null,
  },
  {
    id: "multi_agents",
    Icon: SiOpenai,
    titleKey: "projects.multi_agents.title",
    descriptionKey: "projects.multi_agents.description",
    tags: ["OpenAI API", "Multi-agents", "Docker"],
    viewLink: null,
    codeLink: null,
  },
  {
    id: "actuarial_pipelines",
    Icon: FaDatabase,
    titleKey: "projects.actuarial_pipelines.title",
    descriptionKey: "projects.actuarial_pipelines.description",
    tags: ["Python", "AWS S3", "Chain Ladder"],
    viewLink: null,
    codeLink: null,
  },
  {
    id: "analytics_dashboards",
    Icon: FaChartLine,
    titleKey: "projects.analytics_dashboards.title",
    descriptionKey: "projects.analytics_dashboards.description",
    tags: ["Dash", "Plotly", "Pandas"],
    viewLink: null,
    codeLink: null,
  },
];

export default projects;
