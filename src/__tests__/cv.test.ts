import { describe, it, expect } from "vitest";
import { cvData } from "@/data/cv";

const LOCALES = ["en", "es", "fr"] as const;

describe("cvData shape", () => {
  it("has required personalInfo fields", () => {
    const { personalInfo } = cvData;
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.role).toBeTruthy();
    expect(personalInfo.location).toBeTruthy();
    expect(personalInfo.contact.email).toBeTruthy();
    expect(personalInfo.contact.linkedin).toBeTruthy();
    expect(personalInfo.contact.github).toBeTruthy();
  });

  it("has professionalSummary for all three locales", () => {
    for (const locale of LOCALES) {
      expect(cvData.professionalSummary[locale]).toBeTruthy();
    }
  });

  it("has experience entries localized for all three locales", () => {
    expect(cvData.experience.length).toBeGreaterThan(0);
    for (const job of cvData.experience) {
      expect(job.company).toBeTruthy();
      expect(job.start.year).toBeGreaterThan(0);
      expect(job.start.month).toBeGreaterThanOrEqual(1);
      expect(job.start.month).toBeLessThanOrEqual(12);
      expect(job.tech.length).toBeGreaterThan(0);
      for (const locale of LOCALES) {
        expect(job.role[locale]).toBeTruthy();
        expect(job.location[locale]).toBeTruthy();
        expect(job.highlights[locale].length).toBeGreaterThan(0);
      }
    }
  });

  it("has education entries localized for all three locales", () => {
    expect(cvData.education.length).toBeGreaterThan(0);
    for (const edu of cvData.education) {
      expect(edu.institution).toBeTruthy();
      expect(edu.grade).toBeTruthy();
      expect(edu.year).toBeTruthy();
      for (const locale of LOCALES) {
        expect(edu.degree[locale]).toBeTruthy();
      }
    }
  });

  it("has all skills categories populated", () => {
    const { skills } = cvData;
    expect(skills.management.length).toBeGreaterThan(0);
    expect(skills.backend.length).toBeGreaterThan(0);
    expect(skills.ai.length).toBeGreaterThan(0);
    expect(skills.frontend.length).toBeGreaterThan(0);
    expect(skills.infrastructure.length).toBeGreaterThan(0);
    expect(skills.databases.length).toBeGreaterThan(0);
  });

  it("has language entries localized for all three locales", () => {
    expect(cvData.languages.length).toBeGreaterThan(0);
    for (const lang of cvData.languages) {
      for (const locale of LOCALES) {
        expect(lang.language[locale]).toBeTruthy();
        expect(lang.level[locale]).toBeTruthy();
      }
    }
  });
});
