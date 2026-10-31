export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Values rendered with set:html contain characters (& or ') that Astro would
// escape in an expression; they are trusted, static copy.
const en = {
  "meta.homeTitle": "Elvin Sanchez | Software Engineer",
  "meta.description":
    "Elvin Sanchez — Senior Software Engineer. 5+ years building production systems: fintech payment engines, e-commerce platforms. Java, Spring Boot, Node.js, React.",
  "meta.imageAlt": "Elvin Sanchez — Software Engineer",
  "meta.resumeTitle": "Resume | Elvin Sanchez — Software Engineer",
  "meta.resumeDescription":
    "Resume of Elvin Sanchez — Senior Software Engineer with 5+ years delivering fintech and e-commerce platforms across Latin America, the U.S., and Europe.",

  "layout.skipLink": "Skip to main content",

  "nav.label": "Primary",
  "nav.homeLabel": "EMSANCHEZ — Home",
  "nav.work": "Work",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.resume": "Resume",
  "nav.toggle": "Toggle navigation menu",
  "nav.switchLanguage": "Ver en español",

  "footer.rights": "All rights reserved.",

  "hero.subtitle": "Software Engineer & Architect",
  "hero.greeting": "Hi, I'm Elvin,",
  "hero.accent": "Software engineer.",
  "hero.description":
    "Senior Developer with 5+ years building production systems that handle real money, real users, and real complexity. From fintech payment engines to enterprise e-commerce platforms across Latin America, the U.S., and Europe, I work across the entire stack — Java, Spring Boot, Node.js, React — delivering solutions that companies depend on to operate and grow. Open to freelance projects and new challenges.",
  "hero.scrollLabel": "Scroll to explore",
  "hero.explore": "Explore Portfolio",
  "hero.imageAlt": "Portrait of Elvin Sanchez, Software Engineer",

  "about.title": "About me",
  "about.intro":
    "With over 5 years of experience in full-stack development, I focus on building scalable architectures that don't compromise on user experience. I believe code is a craft that requires both technical rigor and creative intuition.",
  "about.focus":
    "Currently focused on Java ecosystems, React, Distributed Systems, and refining modern web interfaces with a strong emphasis on performance and clean architecture.",
  "about.techLabel": "Core Technologies",

  "experience.title": "Professional Experience",
  "experience.viewDetails": "View details",

  "projects.title": "Selected Projects",
  "projects.viewCaseStudy": "View Case Study",
  "projects.imageAlt": "{title} project",

  "education.title": "Education",

  "contact.titleStart": "Let's build something",
  "contact.titleEnd": "extraordinary.",
  "contact.email": "Email",

  "resume.label": "Resume",
  // Line breaks keep the original source formatting of this paragraph.
  "resume.description": [
    "Software engineer with +5 years of experience in full-stack development.",
    "Proficient in Java, JavaScript, TypeScript and frameworks like React, Next.js,",
    "Spring Boot. Experienced in database design, API integration, scalable",
    "architectures, and working with cross-functional teams.",
  ].join("\n        "),
  "resume.skills": "Core Skills",
  "resume.languages": "Languages",
  "resume.frameworks": "Frameworks",
  "resume.infrastructure": "Infrastructure",

  "detail.techStack": "Tech Stack",

  "caseStudy.metaTitle": "{title} — Case Study | Elvin Sanchez",
  "caseStudy.label": "Case Study",
  "caseStudy.overview": "Overview",
  "caseStudy.viewSource": "View Source",
  "caseStudy.role": "Role",
  "caseStudy.corePillars": "Core Pillars",
  "caseStudy.challenge": "Challenge",
  "caseStudy.solution": "The Solution",
  "caseStudy.impact": "The Impact",
  "caseStudy.ctaTitle": "Ready to explore the code?",
  "caseStudy.ctaDescription":
    "{title} is open-source and available for review. Dive into the architectural decisions that power this project.",
  "caseStudy.githubRepo": "GitHub Repo",
  "caseStudy.back": "Back to Projects",

  "experienceDetail.metaTitle": "{company} — Experience | Elvin Sanchez",
  "experienceDetail.label": "Experience",
  "experienceDetail.engagements": "Engagements",
  "experienceDetail.highlights": "Highlights",
  "experienceDetail.engagement": "Engagement",
  "experienceDetail.ctaTitle": "Want the full story?",
  "experienceDetail.ctaDescription":
    "I'm happy to walk through the architecture decisions behind this work.",
  "experienceDetail.contact": "Get in touch",
  "experienceDetail.back": "Back to Experience",
} as const;

export type UIKey = keyof typeof en;

// Record<UIKey, string> makes a missing or extra Spanish key a type error.
const es: Record<UIKey, string> = {
  "meta.homeTitle": "Elvin Sanchez | Ingeniero de software",
  "meta.description":
    "Elvin Sanchez — Ingeniero de software sénior. Más de 5 años construyendo sistemas en producción: motores de pago fintech y plataformas de e-commerce. Java, Spring Boot, Node.js, React.",
  "meta.imageAlt": "Elvin Sanchez — Ingeniero de software",
  "meta.resumeTitle": "Currículum | Elvin Sanchez — Ingeniero de software",
  "meta.resumeDescription":
    "Currículum de Elvin Sanchez — Ingeniero de software sénior con más de 5 años entregando plataformas fintech y de e-commerce en América Latina, Estados Unidos y Europa.",

  "layout.skipLink": "Saltar al contenido principal",

  "nav.label": "Principal",
  "nav.homeLabel": "EMSANCHEZ — Inicio",
  "nav.work": "Proyectos",
  "nav.about": "Sobre mí",
  "nav.contact": "Contacto",
  "nav.resume": "Currículum",
  "nav.toggle": "Abrir o cerrar el menú de navegación",
  "nav.switchLanguage": "View in English",

  "footer.rights": "Todos los derechos reservados.",

  "hero.subtitle": "Ingeniero y arquitecto de software",
  "hero.greeting": "Hola, soy Elvin,",
  "hero.accent": "ingeniero de software.",
  "hero.description":
    "Desarrollador sénior con más de 5 años construyendo sistemas en producción que manejan dinero real, usuarios reales y complejidad real. Desde motores de pago fintech hasta plataformas empresariales de e-commerce en América Latina, Estados Unidos y Europa, trabajo en todo el stack — Java, Spring Boot, Node.js, React — entregando soluciones de las que las empresas dependen para operar y crecer. Disponible para proyectos freelance y nuevos desafíos.",
  "hero.scrollLabel": "Desplázate para explorar",
  "hero.explore": "Explorar portafolio",
  "hero.imageAlt": "Retrato de Elvin Sanchez, ingeniero de software",

  "about.title": "Sobre mí",
  "about.intro":
    "Con más de 5 años de experiencia en desarrollo full-stack, me enfoco en construir arquitecturas escalables sin sacrificar la experiencia de usuario. Creo que el código es un oficio que requiere tanto rigor técnico como intuición creativa.",
  "about.focus":
    "Actualmente enfocado en los ecosistemas de Java, React, sistemas distribuidos y en perfeccionar interfaces web modernas con un fuerte énfasis en el rendimiento y la arquitectura limpia.",
  "about.techLabel": "Tecnologías principales",

  "experience.title": "Experiencia profesional",
  "experience.viewDetails": "Ver detalles",

  "projects.title": "Proyectos destacados",
  "projects.viewCaseStudy": "Ver caso de estudio",
  "projects.imageAlt": "Proyecto {title}",

  "education.title": "Formación académica",

  "contact.titleStart": "Construyamos algo",
  "contact.titleEnd": "extraordinario.",
  "contact.email": "Correo",

  "resume.label": "Currículum",
  "resume.description":
    "Ingeniero de software con más de 5 años de experiencia en desarrollo full-stack. Dominio de Java, JavaScript, TypeScript y frameworks como React, Next.js y Spring Boot. Experiencia en diseño de bases de datos, integración de APIs, arquitecturas escalables y trabajo con equipos multidisciplinarios.",
  "resume.skills": "Habilidades principales",
  "resume.languages": "Lenguajes",
  "resume.frameworks": "Frameworks",
  "resume.infrastructure": "Infraestructura",

  "detail.techStack": "Stack tecnológico",

  "caseStudy.metaTitle": "{title} — Caso de estudio | Elvin Sanchez",
  "caseStudy.label": "Caso de estudio",
  "caseStudy.overview": "Resumen",
  "caseStudy.viewSource": "Ver código",
  "caseStudy.role": "Rol",
  "caseStudy.corePillars": "Pilares clave",
  "caseStudy.challenge": "Desafío",
  "caseStudy.solution": "La solución",
  "caseStudy.impact": "El impacto",
  "caseStudy.ctaTitle": "¿Listo para explorar el código?",
  "caseStudy.ctaDescription":
    "{title} es de código abierto y está disponible para revisión. Conoce las decisiones de arquitectura detrás de este proyecto.",
  "caseStudy.githubRepo": "Repositorio en GitHub",
  "caseStudy.back": "Volver a proyectos",

  "experienceDetail.metaTitle": "{company} — Experiencia | Elvin Sanchez",
  "experienceDetail.label": "Experiencia",
  "experienceDetail.engagements": "Proyectos",
  "experienceDetail.highlights": "Logros destacados",
  "experienceDetail.engagement": "Proyecto",
  "experienceDetail.ctaTitle": "¿Quieres conocer la historia completa?",
  "experienceDetail.ctaDescription":
    "Con gusto te explico las decisiones de arquitectura detrás de este trabajo.",
  "experienceDetail.contact": "Contáctame",
  "experienceDetail.back": "Volver a experiencia",
};

export const ui: Record<Locale, Record<UIKey, string>> = { en, es };

export const ogLocales: Record<Locale, string> = { en: "en_US", es: "es_ES" };

export function getLocale(currentLocale: string | undefined): Locale {
  return locales.includes(currentLocale as Locale)
    ? (currentLocale as Locale)
    : defaultLocale;
}

// Strips the locale prefix: "/es/resume" -> "/resume", "/es" -> "/".
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/es(?=\/|$)/, "") || "/";
}

// Prefixes a site path for the locale; English keeps the unprefixed URL.
export function localizePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}/` : `/${locale}${path}`;
}

// Returns a translator for the locale; {name} placeholders are replaced from vars.
export function useTranslations(locale: Locale) {
  return (key: UIKey, vars: Record<string, string> = {}) =>
    ui[locale][key].replace(/\{(\w+)\}/g, (match, name) => vars[name] ?? match);
}
