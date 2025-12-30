export type SkillGroup = {
  title: "Web" | "Software" | "Data";
  items: string[];
};

export type ProjectCategory = "web" | "software" | "data";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  demoUrl?: string;
  repoUrl?: string;
  impact: string[];
  year?: string;
}

export const profile = {
  name: "Duta Razaq",
  tagline: "Data Analyst & Web Developer",
  about:
    "Hi! I am Duta Razaq, an Informatics graduate from Telkom University with a passion for data analytics, machine learning, and web development. I enjoy turning data into insights and building solutions that are both functional and impactful. With experience in data management, front-end development, and data analysis, I focus on creating structured, user-oriented, and data-driven solutions. I also presented my research at the ICoDSA 2025 international conference. Let's build something meaningful together.",
  email: "razaqduta@gmail.com",
  github: "https://github.com/lboyz",
  linkedin: "https://www.linkedin.com/in/dutarazaq/",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Web",
    items: [
      "HTML (Advanced)",
      "CSS (Advanced)",
      "PHP (Intermediate)",
      "JavaScript (Advanced)",
      "Laravel (Advanced)",
      "TypeScript (Intermediate)",
      "Go (Intermediate)",
      "VueJS (Intermediate)",
      "Next.js (Intermediate)",
      "NodeJS (Beginner)",
      "Tailwind (Advanced)",
      "Bootstrap (Advanced)",
      "ReactJS (Beginner)",
    ],
  },
  {
    title: "Software",
    items: ["Kotlin (Beginner)", "Flutter (Intermediate)"],
  },
  {
    title: "Data",
    items: [
      "Python (Advanced)",
      "Excel (Advanced)",
      "SQL (Intermediate)",
      "Tableau (Beginner)",
      "Power BI (Intermediate)",
      "Google Analytics (Intermediate)",
      "Looker Studio (Advanced)",
    ],
  },
];

export const projectFilters: Array<{
  label: string;
  value: "all" | ProjectCategory;
}> = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Software", value: "software" },
  { label: "Data", value: "data" },
];

export const projects: Project[] = [
  {
    id: "death-analysis-id",
    title: "Analisis Penyebab Kematian di Indonesia",
    description:
      "Analyzes causes of death in Indonesia (2000-2022) with interactive visuals built from reliable data sources.",
    category: "data",
    stack: ["Python", "Streamlit"],
    demoUrl: "https://tubes-visualisasi-dataduway.streamlit.app/",
    repoUrl: "https://github.com/lboyz/Analisis-Penyebab-Kematian-di-Indonesia",
    impact: [
      "Interactive dashboards",
      "Storytelling visuals",
      "Reliable data sources",
    ],
    year: "2024",
  },
  {
    id: "aigo-redesign",
    title: "AIGO",
    description:
      "A redesigned Humic Engineering health app with a modern, interactive experience.",
    category: "software",
    stack: ["Flutter"],
    repoUrl: "https://github.com/lboyz/AIGO",
    impact: ["Redesigned UI", "New feature flows", "Improved usability"],
    year: "2024",
  },
  {
    id: "culture-booster",
    title: "Culture-Booster Game",
    description: 'A lightweight website to play a quick "guess the song" game.',
    category: "web",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://culture-booster.vercel.app/",
    repoUrl: "https://github.com/lboyz/Culture-Booster",
    impact: ["Fast gameplay", "Lightweight experience", "Mobile friendly"],
    year: "2025",
  },
  {
    id: "ptpn-dashboard",
    title: "Dashboard Posisi Saldo PTPN Group",
    description:
      "Executive dashboard that monitors PTPN Group daily bank balances and variance gaps.",
    category: "data",
    stack: ["Looker Studio", "BigQuery"],
    impact: [
      "Daily financial monitoring",
      "Variance tracking",
      "Executive-ready view",
    ],
    year: "2025",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing skills, featured projects, and experience with a premium one-page layout.",
    category: "web",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demoUrl: "https://dutsky.netlify.app/",
    repoUrl: "https://github.com/lboyz/Portofolio",
    impact: ["Premium single-page layout", "Project filtering", "Dark mode"],
    year: "2025",
  },
];

export const featuredProjectIds = ["death-analysis-id", "ptpn-dashboard"];
