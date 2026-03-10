// src/data/cv.ts

export const cvData = {
  personalInfo: {
    name: "Marc Ruiz",
    nickname: "@markusrc11",
    nickname: "@markusrc11",
    role: "Senior Software Engineer | Product & Project Lead",
    specialization: "Python, Java & Kotlin Specialist",
    location: "Girona, Spain",
    contact: {
      email: "markusrc11@gmail.com",
      phone: "+34 661 755 451",
      linkedin: "https://linkedin.com/in/marcruiz11",
      github: "https://github.com/markusrc11"
    }
  },
  professionalSummary: {
    en: "Software Engineer with over 6 years of experience in the software development lifecycle. Expertise in Android (Kotlin/Java), IoT, and Cloud-based Backend (AWS/Python). Transitioning into Engineering Management/Product Owner roles with a focus on roadmap definition and mentoring.",
    es: "Ingeniero de Software con más de 6 años de experiencia. Experto en desarrollo móvil Android, integración IoT y sistemas Backend en la nube. En transición hacia roles de Engineering Management o Product Owner.",
    fr: "Ingénieur Logiciel avec plus de 6 ans d'expérience. Expertise en développement mobile Android, IoT et systèmes Backend Cloud. En transition vers des rôles de Engineering Management ou Product Owner."
  },
  skills: {
    management: ["Product Lifecycle Management", "Roadmap Planning", "Technical Leadership", "KPI Definition"],
    backend: ["Python", "Java", "Kotlin", "OpenERP/Odoo", "DDD", "Clean Architecture", "REST APIs"],
    frontend: ["React.js", "Next.js", "TailwindCSS", "Alpine.js", "TypeScript"],
    infrastructure: ["AWS (EC2, S3)", "Docker", "Jenkins", "GitHub Actions", "Linux Admin"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  experience: [
    {
      company: "STUDENTAN.COM (AI)",
      role: "Full Stack Developer (Freelance)",
      period: "April 2025 – Present",
      highlights: [
        "Full ownership of web platform refactoring using PHP and DDD.",
        "Improved UX with Alpine.js and TailwindCSS."
      ]
    },
    {
      company: "GISCE-TI SL",
      role: "Software Engineer",
      period: "Dec 2021 – Present",
      highlights: [
        "Led management and development of native Android app (Kotlin/Java).",
        "Integrated MongoDB and Redis for real-time electricity meter data.",
        "Automated internal processes using Python for OpenERP."
      ]
    },
    {
      company: "NEWRONIA SL",
      role: "Software Developer",
      period: "Nov 2016 – Dec 2019",
      highlights: [
        "Developed Android (Java) app for indoor geolocation.",
        "Deployed AI-driven route calculation engine on AWS for a fleet of 50+ trucks."
      ]
    }
  ],
  education: [
    { degree: "Bachelor's Degree in Computer Engineering", institution: "Universitat de Girona", grade: "8.75/10", year: "2017 – 2021" },
    { degree: "HNC in Multiplatform App Development", institution: "IES Rafael Campalans", grade: "9.25/10", year: "2015 – 2017" },
    { degree: "VET in Microcomputer Systems and Networks", institution: "IES Rafael Campalans", grade: "9.75/10", year: "2013 – 2015" }
  ],
  languages: [
    { language: "Spanish & Catalan", level: "Native" },
    { language: "English", level: "B2.2 (Professional)" },
    { language: "French", level: "B1 (Intermediate)" }
  ]
};
