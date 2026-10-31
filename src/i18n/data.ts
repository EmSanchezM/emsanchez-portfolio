import { defaultLocale, locales, type Locale } from "@/i18n/ui";
import type enEducation from "@/data/en/education.json";
import type enExperiences from "@/data/en/profesional-experience.json";
import type enProjects from "@/data/en/projects.json";

// English data defines the shape every locale must follow.
export type Education = (typeof enEducation)[number];
export type Experience = (typeof enExperiences)[number];
export type Project = (typeof enProjects)[number];

type DataFile = "education" | "profesional-experience" | "projects";
const dataFiles: DataFile[] = ["education", "profesional-experience", "projects"];

const files = import.meta.glob<unknown[]>("../data/*/*.json", {
  eager: true,
  import: "default",
});

const pathOf = (locale: Locale, file: DataFile) => `../data/${locale}/${file}.json`;

// Fails when a translation drifts from English: same keys, same array lengths, same slugs.
function assertSameShape(base: unknown, other: unknown, where: string): void {
  if (Array.isArray(base)) {
    if (!Array.isArray(other) || other.length !== base.length) {
      throw new Error(`i18n parity: ${where} must be an array of ${base.length} items`);
    }
    base.forEach((item, i) => assertSameShape(item, other[i], `${where}[${i}]`));
    return;
  }
  if (base !== null && typeof base === "object") {
    if (other === null || typeof other !== "object" || Array.isArray(other)) {
      throw new Error(`i18n parity: ${where} must be an object`);
    }
    const baseKeys = Object.keys(base).sort().join(",");
    const otherKeys = Object.keys(other).sort().join(",");
    if (baseKeys !== otherKeys) {
      throw new Error(`i18n parity: ${where} keys differ (${baseKeys} vs ${otherKeys})`);
    }
    for (const [key, value] of Object.entries(base)) {
      const otherValue = (other as Record<string, unknown>)[key];
      if (key === "slug" && value !== otherValue) {
        throw new Error(`i18n parity: ${where}.slug must be "${value}"`);
      }
      assertSameShape(value, otherValue, `${where}.${key}`);
    }
    return;
  }
  if (typeof base !== typeof other) {
    throw new Error(`i18n parity: ${where} must be a ${typeof base}`);
  }
}

for (const locale of locales) {
  if (locale === defaultLocale) continue;
  for (const file of dataFiles) {
    const data = files[pathOf(locale, file)];
    if (!data) throw new Error(`i18n parity: missing src/data/${locale}/${file}.json`);
    assertSameShape(files[pathOf(defaultLocale, file)], data, `${locale}/${file}`);
  }
}

function load<T>(locale: Locale, file: DataFile): T[] {
  return files[pathOf(locale, file)] as T[];
}

export const getEducation = (locale: Locale) =>
  load<Education>(locale, "education");

export const getExperiences = (locale: Locale) =>
  load<Experience>(locale, "profesional-experience");

export const getProjects = (locale: Locale) =>
  load<Project>(locale, "projects");

// Static paths for detail pages; Astro.currentLocale is not available in getStaticPaths.
export const getProjectPaths = (locale: Locale) =>
  getProjects(locale).map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));

export const getExperiencePaths = (locale: Locale) =>
  getExperiences(locale)
    .filter((exp) => "engagements" in exp)
    .map((exp) => ({
      params: { slug: exp.slug },
      props: { exp },
    }));
