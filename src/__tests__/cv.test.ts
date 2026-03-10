import { describe, it, expect } from "vitest";
import { cvData } from "@/data/cv";

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
    expect(cvData.professionalSummary.en).toBeTruthy();
    expect(cvData.professionalSummary.es).toBeTruthy();
    expect(cvData.professionalSummary.fr).toBeTruthy();
  });

  it("has at least one experience entry with required fields", () => {
    expect(cvData.experience.length).toBeGreaterThan(0);
    for (const job of cvData.experience) {
      expect(job.company).toBeTruthy();
      expect(job.role).toBeTruthy();
      expect(job.period).toBeTruthy();
      expect(job.highlights.length).toBeGreaterThan(0);
    }
  });

  it("has at least one education entry with required fields", () => {
    expect(cvData.education.length).toBeGreaterThan(0);
    for (const edu of cvData.education) {
      expect(edu.degree).toBeTruthy();
      expect(edu.institution).toBeTruthy();
      expect(edu.grade).toBeTruthy();
      expect(edu.year).toBeTruthy();
    }
  });

  it("has all skills categories populated", () => {
    const { skills } = cvData;
    expect(skills.management.length).toBeGreaterThan(0);
    expect(skills.backend.length).toBeGreaterThan(0);
    expect(skills.frontend.length).toBeGreaterThan(0);
    expect(skills.infrastructure.length).toBeGreaterThan(0);
    expect(skills.databases.length).toBeGreaterThan(0);
  });

  it("has at least one language entry", () => {
    expect(cvData.languages.length).toBeGreaterThan(0);
    for (const lang of cvData.languages) {
      expect(lang.language).toBeTruthy();
      expect(lang.level).toBeTruthy();
    }
  });
});
