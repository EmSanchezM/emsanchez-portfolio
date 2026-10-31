import { defaultLocale, type Locale } from "@/i18n/ui";
import type enEducation from "@/data/en/education.json";
import type enExperiences from "@/data/en/profesional-experience.json";
import type enProjects from "@/data/en/projects.json";

// English data defines the shape every locale must follow.
export type Education = (typeof enEducation)[number];
export type Experience = (typeof enExperiences)[number];
export type Project = (typeof enProjects)[number];

type DataFile = "education" | "profesional-experience" | "projects";

const files = import.meta.glob<unknown[]>("../data/*/*.json", {
  eager: true,
  import: "default",
});

// Returns the locale's data file, falling back to English when it is missing.
function load<T>(locale: Locale, file: DataFile): T[] {
  const data =
    files[`../data/${locale}/${file}.json`] ??
    files[`../data/${defaultLocale}/${file}.json`];
  return data as T[];
}

export const getEducation = (locale: Locale) =>
  load<Education>(locale, "education");

export const getExperiences = (locale: Locale) =>
  load<Experience>(locale, "profesional-experience");

export const getProjects = (locale: Locale) =>
  load<Project>(locale, "projects");
