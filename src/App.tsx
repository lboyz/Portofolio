import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BackgroundSquares } from "./components/BackgroundSquares";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import { ProjectCard } from "./components/ProjectCard";
import { SectionReveal } from "./components/SectionReveal";
import { SectionTitle } from "./components/SectionTitle";
import { SkillBadge } from "./components/SkillBadge";
import { WelcomeIntro } from "./components/WelcomeIntro";
import {
  featuredProjectIds,
  profile,
  projectFilters,
  projects,
  skillGroups,
} from "./data/content";
import profileImage from "./assets/profile.png";
import bootstrapLogo from "./assets/logo-lang/BOOTSTRAP.png";
import cssLogo from "./assets/logo-lang/CSS.png";
import excelLogo from "./assets/logo-lang/EXCEL.png";
import flutterLogo from "./assets/logo-lang/FLUTTER.png";
import goLogo from "./assets/logo-lang/GO.png";
import googleAnalyticsLogo from "./assets/logo-lang/GOOGLE ANALYTICS.png";
import bigqueryLogo from "./assets/logo-lang/BIGQUERY.png";
import htmlLogo from "./assets/logo-lang/HTML.png";
import jsLogo from "./assets/logo-lang/JS.png";
import kotlinLogo from "./assets/logo-lang/KOTLIN.png";
import laravelLogo from "./assets/logo-lang/LARAVEL.png";
import lookerLogo from "./assets/logo-lang/LOOKER.png";
import nextLogo from "./assets/logo-lang/NEXTJS.png";
import nodeLogo from "./assets/logo-lang/NODEJS.png";
import phpLogo from "./assets/logo-lang/PHP.png";
import powerBiLogo from "./assets/logo-lang/POWERBI.png";
import pythonLogo from "./assets/logo-lang/PYTHON.png";
import reactLogo from "./assets/logo-lang/REACTJS.png";
import sqlLogo from "./assets/logo-lang/SQL.png";
import tableauLogo from "./assets/logo-lang/TABLEAU.png";
import tailwindLogo from "./assets/logo-lang/TAILWIND.png";
import tsLogo from "./assets/logo-lang/TYPESCRIPT.png";
import vueLogo from "./assets/logo-lang/VUEJS.png";

const THEME_KEY = "portfolio-theme";
type ProjectFilter = "all" | "web" | "software" | "data";
type SkillFilter = "web" | "software" | "data";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSkill, setActiveSkill] = useState<SkillFilter>("web");
  const [showWelcome, setShowWelcome] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowWelcome(false), 2400);
    return () => window.clearTimeout(timeout);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
      return next;
    });
  };

  const filteredProjects = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    return projects.filter((project) => {
      if (activeFilter !== "all" && project.category !== activeFilter) {
        return false;
      }
      if (!normalized) {
        return true;
      }
      const haystack = [
        project.title,
        project.description,
        project.stack.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [activeFilter, searchTerm]);

  const featuredProjects = useMemo(
    () => projects.filter((project) => featuredProjectIds.includes(project.id)),
    [],
  );

  const heroMotion = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const activeSkillGroup = useMemo(() => {
    return skillGroups.find(
      (group) => group.title.toLowerCase() === activeSkill,
    );
  }, [activeSkill]);

  const skillLogoMap: Record<string, string> = {
    HTML: htmlLogo,
    CSS: cssLogo,
    PHP: phpLogo,
    JavaScript: jsLogo,
    Laravel: laravelLogo,
    TypeScript: tsLogo,
    Go: goLogo,
    VueJS: vueLogo,
    "Next.js": nextLogo,
    NodeJS: nodeLogo,
    Tailwind: tailwindLogo,
    Bootstrap: bootstrapLogo,
    ReactJS: reactLogo,
    Kotlin: kotlinLogo,
    Flutter: flutterLogo,
    Python: pythonLogo,
    Excel: excelLogo,
    BigQuery: bigqueryLogo,
    SQL: sqlLogo,
    Tableau: tableauLogo,
    "Power BI": powerBiLogo,
    "Google Analytics": googleAnalyticsLogo,
    "Looker Studio": lookerLogo,
  };

  const profileIconSvg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path d="M32 38L6 64l26 26" fill="none" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M96 38l26 26-26 26" fill="none" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M76 26L52 102" fill="none" stroke="white" stroke-width="8" stroke-linecap="round"/>
      </svg>`,
    );

  return (
    <div className="min-h-screen">
      <BackgroundSquares squareSize={50} speed={0.2} direction="diagonal" />
      <WelcomeIntro show={showWelcome} />
      <div className="relative z-10">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />

        <main
          id="main-content"
          className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-8 sm:gap-20 sm:px-6 sm:py-12 lg:gap-28 lg:py-20"
        >
          <section id="home" className="scroll-mt-28">
            <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:items-start lg:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                className="space-y-6 sm:space-y-8"
                initial="hidden"
                animate="visible"
                variants={heroMotion}
              >
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/70 dark:text-white/60 sm:text-left">
                  <span className="inline-block transition-transform duration-300 hover:scale-105">
                    {profile.tagline}
                  </span>
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <motion.h1
                    className="text-center font-heading text-2xl font-semibold leading-tight text-ink-900 dark:text-white sm:text-left sm:text-3xl sm:leading-normal md:text-4xl lg:text-5xl xl:text-6xl"
                    variants={heroMotion}
                  >
                    Turning data into clarity and websites into impact.
                  </motion.h1>
                  <p className="text-justify text-sm leading-relaxed text-ink-700 dark:text-white/70 sm:text-left sm:text-base sm:leading-normal md:text-lg">
                    Hi, I am{" "}
                    <span className="font-semibold">{profile.name}</span>, an
                    Informatics graduate with a focus on data analytics, machine
                    learning, and web development. I love building data-driven
                    solutions that are structured, user-oriented, and impactful.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4">
                  <Button href="#projects">View Projects</Button>
                  <Button variant="ghost" href="#contact">
                    Contact
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-2 text-center text-xs text-ink-700 dark:text-white/70 sm:flex-row sm:items-start sm:justify-start sm:text-left sm:gap-6 sm:text-sm">
                  <span>Focus: data analytics + web development</span>
                  <span>Open to collaboration and new roles</span>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={heroMotion}
                className="flex justify-center lg:justify-end lg:relative lg:top-12"
              >
                <ProfileCard
                  avatarUrl={profileImage}
                  miniAvatarUrl={profileImage}
                  iconUrl={profileIconSvg}
                  name={profile.name}
                  title={profile.tagline}
                  handle="lboyz"
                  status="Available"
                  contactText="Email"
                  showIcon
                  showBehindGlow
                  variant={isDark ? "dark" : "light"}
                  customInnerGradient={
                    isDark
                      ? "linear-gradient(145deg, rgba(8, 12, 20, 0.95) 0%, rgba(24, 32, 52, 0.9) 45%, rgba(12, 16, 28, 0.98) 100%)"
                      : "linear-gradient(145deg, rgba(226, 232, 240, 0.92) 0%, rgba(203, 213, 225, 0.86) 45%, rgba(241, 245, 249, 0.95) 100%)"
                  }
                  behindGlowColor={
                    isDark
                      ? "rgba(125, 190, 255, 0.67)"
                      : "rgba(148, 163, 184, 0.65)"
                  }
                  onContactClick={() => {
                    window.location.href = `mailto:${profile.email}`;
                  }}
                />
              </motion.div>
            </div>
          </section>

          <section id="about" className="scroll-mt-28">
            <SectionReveal>
              <div className="section-card star-border grid gap-6 p-5 sm:gap-8 sm:p-6 md:gap-10 md:p-8 lg:p-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <SectionTitle
                      eyebrow="About"
                      title="Data-driven solutions with a human-centered approach."
                      description={profile.about}
                      centerTitle={true}
                    />
                  </div>
                  {/* <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                  <Button href="#projects">View Projects</Button>
                  <Button variant="ghost" href="#contact">
                    Contact
                  </Button>
                </div> */}
                </div>
                <div className="flex flex-col items-center gap-6">
                  <motion.div
                    className="section-card star-border relative overflow-hidden p-5 sm:p-6 md:p-8"
                    initial="hidden"
                    animate="visible"
                    variants={heroMotion}
                  >
                    <div className="space-y-3 sm:space-y-1">
                      <div className="text-center">
                        <h2 className="font-heading text-lg font-semibold text-ink-900 dark:text-white sm:text-xl md:text-2xl">
                          Highlights
                        </h2>
                        <p className="text-xs text-ink-700 dark:text-white/70 sm:text-sm">
                          Data + Web focus
                        </p>
                      </div>
                      <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                        {[
                          "Author and presenter at ICoDSA 2025",
                          "Analytics + dashboard delivery",
                          "Clean, accessible UI",
                          "Data-driven product mindset",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-ink-900/10 bg-white/80 px-3 py-2.5 text-center text-xs text-ink-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 sm:px-4 sm:py-3 sm:text-left sm:text-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap justify-center gap-3"></div>
                    </div>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl animate-pulse" />
                    <div
                      className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                  </motion.div>
                  <div className="section-card star-border w-full p-5 text-xs text-ink-800 sm:p-6 sm:text-sm">
                    <h3 className="text-center font-heading text-base font-semibold text-ink-900 dark:text-white sm:text-center sm:text-lg">
                      Quick Facts
                    </h3>
                    <div className="my-3 h-px bg-gradient-to-r from-transparent via-ink-900/10 to-transparent dark:via-white/15 sm:my-4" />
                    <ul className="space-y-2 text-center text-ink-800 dark:text-slate-300 sm:space-y-3 lg:text-left">
                      <li>
                        <span className="font-semibold text-ink-900 dark:text-white">
                          Education:
                        </span>{" "}
                        Bachelor in Informatics, Telkom University
                      </li>
                      <li>
                        <span className="font-semibold text-ink-900 dark:text-white">
                          Focus:
                        </span>{" "}
                        Data Analytics, ML, Web Development
                      </li>
                      <li>
                        <span className="font-semibold text-ink-900 dark:text-white">
                          Conference:
                        </span>{" "}
                        Author and presenter at ICoDSA 2025
                      </li>
                    </ul>
                  </div>
                  {/* <img
                  src={profileImage}
                  alt="Duta Razaq"
                  className="h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-white/50 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-48 sm:w-48 dark:ring-white/20"
                /> */}
                </div>
              </div>
            </SectionReveal>
          </section>

          <section id="skills" className="scroll-mt-28">
            <SectionReveal>
              <SectionTitle
                eyebrow="Skills"
                title="A practical toolkit across web, software, and data."
                description="Filter by discipline to explore focused skill sets."
                descriptionAlign="left"
              />
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:justify-start sm:gap-3">
                {(["web", "software", "data"] as SkillFilter[]).map(
                  (filter) => (
                    <button
                      key={filter}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 sm:px-5 sm:py-2.5 ${
                        activeSkill === filter
                          ? "border-ink-900 bg-ink-900 text-white shadow-glow hover:shadow-glow-lg hover:scale-105 dark:border-white dark:bg-white dark:text-ink-900"
                          : "border-ink-900/20 text-ink-900 hover:bg-ink-900/5 hover:border-ink-900/30 hover:scale-105 dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/30"
                      }`}
                      type="button"
                      onClick={() => setActiveSkill(filter)}
                    >
                      {filter}
                    </button>
                  ),
                )}
              </div>
              {activeSkillGroup ? (
                <div className="mt-8">
                  <div className="section-card star-border w-full p-6 sm:p-8">
                    <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <h3 className="text-center font-heading text-xl font-semibold text-ink-900 dark:text-white sm:text-left sm:text-2xl">
                        {activeSkillGroup.title} Skills
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-ink-700/60 dark:text-white/60">
                        {activeSkillGroup.items.length} skills
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2.5 items-start sm:mt-6 sm:gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {activeSkillGroup.items.map((skill) => {
                        const match = skill.match(
                          /^(.*)\s+\((Advanced|Intermediate|Beginner)\)$/,
                        );
                        const label = match ? match[1] : skill;
                        const level = match ? match[2] : undefined;
                        return (
                          <SkillBadge
                            key={skill}
                            label={label}
                            level={level}
                            logoSrc={skillLogoMap[label]}
                            logo={label.slice(0, 2).toUpperCase()}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : null}
            </SectionReveal>
          </section>

          <section id="projects" className="scroll-mt-28">
            <SectionReveal>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <SectionTitle
                    eyebrow="Projects"
                    title="Selected work across web, software, and data."
                    description="Filter by category and search by keyword to explore the work."
                    descriptionAlign="left"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-center font-heading text-xl font-semibold text-ink-900 dark:text-white sm:text-left sm:text-2xl">
                    Featured Projects
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {featuredProjects.map((project) => (
                      <ProjectCard key={project.id} {...project} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3">
                    {projectFilters.map((filter) => (
                      <button
                        key={filter.value}
                        className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 sm:px-4 sm:py-2 ${
                          activeFilter === filter.value
                            ? "border-ink-900 bg-ink-900 text-white shadow-glow hover:shadow-glow-lg hover:scale-105 dark:border-white dark:bg-white dark:text-ink-900"
                            : "border-ink-900/20 text-ink-900 hover:bg-ink-900/5 hover:border-ink-900/30 hover:scale-105 dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/30"
                        }`}
                        type="button"
                        onClick={() => setActiveFilter(filter.value)}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                  <label className="relative mx-auto w-full sm:mx-0 sm:w-auto">
                    <span className="sr-only">Search projects</span>
                    <input
                      className="w-full rounded-full border border-ink-900/20 bg-white/80 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-900 placeholder:text-ink-700/60 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 focus:bg-white/90 hover:border-ink-900/30 dark:border-white/20 dark:bg-ink-900/60 dark:text-white dark:placeholder:text-white/50 dark:focus:border-accent-500/50 dark:focus:ring-accent-500/20 dark:hover:border-white/30 sm:w-52 sm:text-left"
                      type="search"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      aria-label="Search projects"
                    />
                  </label>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
                {filteredProjects.length === 0 ? (
                  <p className="text-sm text-ink-700 dark:text-white/70">
                    No projects match this filter. Try a different keyword.
                  </p>
                ) : null}
              </div>
            </SectionReveal>
          </section>

          <section id="experience" className="scroll-mt-28">
            <SectionReveal>
              <SectionTitle
                eyebrow="Experience"
                title="Timeline"
                description="A clean placeholder timeline ready for real experience entries."
                descriptionAlign="left"
              />
              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
                {[
                  {
                    title: "Data Analytics Intern",
                    company: "PT Perkebunan Nusantara III (Persero)",
                    year: "10/2025 - Now",
                    bullets: [
                      "Developed and maintained interactive dashboards using Looker Studio integrated with BigQuery, enabling automated data updates, dynamic filtering, and real-time financial and operational insights across PTPN Group.",
                      "Performed data preparation and integration from multiple sources (Excel, Google Sheets, BigQuery), including data cleaning, validation, handling null/NaN values, and restructuring datasets to ensure analytical consistency.",
                      "Designed interactive and insightful data visualizations to support analysis and decision-making.",
                      "Collaborated with the development team to build a KPI application and conducted UAT for the ONEPTPN HUB application.",
                    ],
                  },
                  {
                    title: "Data Analytics Intern",
                    company: "Motiolabs Indonesia",
                    year: "11/2024 - 01/2025",
                    bullets: [
                      "Performed preprocessing and analysis of air quality data (PM2.5 in Jambi City, 2020–2024), including data cleaning, normalization, and handling of missing values.",
                      "Implemented time series forecasting models (SVR, Random Forest, XGBoost, and LSTM) to predict PM2.5 concentration trends.",
                      "Evaluated model performance using MSE, RMSE, and MAE to achieve reliable forecasting accuracy.",
                      "Maintained dataset archives and documentation to support data transparency and consistency.",
                    ],
                  },
                  {
                    title: "Front-end Developer Intern",
                    company: "Humic Engineering",
                    year: "09/2024 - 11/2024",
                    bullets: [
                      "Redesigned and implemented the AIGO healthcare platform catalog using Flutter to improve interface responsiveness and user experience.",
                      "Translated UI/UX designs into a modern, responsive, and user-friendly interface in accordance with project requirements.",
                      "Collaborated with UI/UX designers to ensure alignment between design and functionality through iterative testing across multiple devices.",
                      "Maintained structured documentation to support the development process and version tracking.",
                    ],
                  },
                  {
                    title: "Data Management Intern",
                    company: "Telkom Witel Bandung",
                    year: "07/2024 - 08/2024",
                    bullets: [
                      "Conducted customer and network data validation using CAREnt, Valins, UIMTOOLS, and NOSSF-UIM to ensure data accuracy and consistency.",
                      "Performed Drop Core and Drop Only processes for inactive ODP panels and supported data synchronization across platforms.",
                      "Assisted field operations, including ODP installation, Drop Core dismantling, and ODC validation to maintain service quality.",
                      "Prepared daily administrative reports to support the operations of the Data Management Unit.",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="section-card star-border p-4 sm:p-5 md:p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-700 dark:text-white/70 sm:text-sm">
                      <span>{item.company}</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="mt-2 font-heading text-base font-semibold text-ink-900 dark:text-white sm:mt-3 sm:text-lg md:text-xl">
                      {item.title}
                    </h3>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-xs text-ink-700 dark:text-white/70 sm:mt-4 sm:space-y-2 sm:pl-5 sm:text-sm">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </section>

          <section id="contact" className="scroll-mt-28">
            <SectionReveal>
              <div className="section-card star-border flex flex-col items-center gap-5 p-5 text-center sm:gap-6 sm:p-6 md:p-8 lg:p-10">
                <SectionTitle
                  eyebrow="Contact"
                  title="Let's build something meaningful together."
                  description="Reach out with project ideas, analytics needs, or collaboration plans."
                  centerTitle={true}
                  descriptionAlign="center"
                />
                <a
                  className="rounded-full border border-ink-900/20 bg-white/80 px-5 py-3 text-sm font-semibold text-ink-900 backdrop-blur-sm transition-all duration-300 hover:bg-ink-900/5 hover:border-ink-900/30 hover:scale-105 hover:shadow-md dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/30 sm:px-6 sm:py-3"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <Button
                    variant="ghost"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="ghost"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </SectionReveal>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
