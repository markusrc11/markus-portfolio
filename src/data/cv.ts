// src/data/cv.ts

export const cvData = {
  personalInfo: {
    name: "Marc Ruiz",
    nickname: "@markusrc11",
    role: "Backend & AI Software Engineer",
    location: "Girona, Spain",
    contact: {
      email: "markusrc11@gmail.com",
      phone: "+34 661 755 451",
      linkedin: "https://linkedin.com/in/marcruiz11",
      github: "https://github.com/markusrc11"
    }
  },
  professionalSummary: {
    en: "Software engineer with 6+ years shipping production systems end-to-end — from an AWS route-optimization engine to a live multilingual GenAI product. I work across backend services, cloud infrastructure and LLM-powered features, and I care about systems that stay correct under real-world load.",
    es: "Ingeniero de software con más de 6 años construyendo sistemas en producción de principio a fin — desde un motor de optimización de rutas en AWS hasta un producto GenAI multilingüe en producción. Trabajo en servicios backend, infraestructura cloud y funcionalidades basadas en LLM, y me importa que los sistemas sigan siendo correctos bajo carga real.",
    fr: "Ingénieur logiciel avec plus de 6 ans à livrer des systèmes en production de bout en bout — d'un moteur d'optimisation d'itinéraires sur AWS à un produit GenAI multilingue en production. Je travaille sur les services backend, l'infrastructure cloud et les fonctionnalités basées sur les LLM, en veillant à ce que les systèmes restent fiables sous charge réelle."
  },
  skills: {
    // Skill items are kept language-invariant on purpose (industry terms).
    management: ["Product Lifecycle Management", "Roadmap Planning", "Technical Leadership", "KPI Definition"],
    backend: ["Python", "Java", "Kotlin", "OpenERP/Odoo", "DDD", "Clean Architecture", "REST APIs"],
    ai: ["OpenAI LLM integration", "Multilingual generation", "AI image generation", "Optimization algorithms"],
    frontend: ["React.js", "TailwindCSS", "Alpine.js", "TypeScript"],
    infrastructure: ["AWS (EC2, S3)", "Docker", "Jenkins", "GitHub Actions", "Linux Admin"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"]
  },
  experience: [
    {
      company: "Spoki",
      start: { year: 2026, month: 2 },
      end: null as { year: number; month: number } | null,
      location: {
        en: "Remote — Girona, Spain",
        es: "Remoto — Girona, España",
        fr: "À distance — Gérone, Espagne"
      },
      tech: ["Python", "OpenAI", "FastAPI", "Django"],
      role: {
        en: "AI Software Engineer",
        es: "Ingeniero de Software IA",
        fr: "Ingénieur Logiciel IA"
      },
      highlights: {
        en: [
          "Integrated OpenAI LLMs with strict output constraints and multilingual support into the core product.",
          "Built a cross-repository data auto-fill feature (AI, backend, frontend) to cut onboarding friction.",
          "Added AI image-generation to the user workflow, from technical definition to production."
        ],
        es: [
          "Integré LLMs de OpenAI con restricciones estrictas de salida y soporte multilingüe en el producto principal.",
          "Desarrollé una funcionalidad de autocompletado de datos entre repositorios (IA, backend, frontend) para reducir la fricción de onboarding.",
          "Añadí generación de imágenes con IA al flujo del usuario, desde la definición técnica hasta producción."
        ],
        fr: [
          "Intégré des LLM d'OpenAI avec des contraintes de sortie strictes et un support multilingue dans le produit principal.",
          "Développé une fonctionnalité d'auto-remplissage de données inter-dépôts (IA, backend, frontend) pour réduire la friction d'onboarding.",
          "Ajouté la génération d'images par IA au parcours utilisateur, de la définition technique à la production."
        ]
      }
    },
    {
      company: "Studentan",
      start: { year: 2025, month: 4 },
      end: null as { year: number; month: number } | null,
      location: {
        en: "Remote — Geneva, Switzerland",
        es: "Remoto — Ginebra, Suiza",
        fr: "À distance — Genève, Suisse"
      },
      tech: ["PHP", "Alpine.js", "TailwindCSS"],
      role: {
        en: "Full Stack Developer (Freelance)",
        es: "Desarrollador Full Stack (Freelance)",
        fr: "Développeur Full Stack (Freelance)"
      },
      highlights: {
        en: [
          "Full ownership of web platform refactoring using PHP and DDD.",
          "Improved UX with Alpine.js and TailwindCSS."
        ],
        es: [
          "Responsabilidad total del refactor de la plataforma web con PHP y DDD.",
          "Mejoré la UX con Alpine.js y TailwindCSS."
        ],
        fr: [
          "Responsabilité totale du refactoring de la plateforme web avec PHP et DDD.",
          "Amélioré l'UX avec Alpine.js et TailwindCSS."
        ]
      }
    },
    {
      company: "Gisce-TI",
      start: { year: 2021, month: 12 },
      end: { year: 2026, month: 2 } as { year: number; month: number } | null,
      location: {
        en: "Girona, Spain",
        es: "Girona, España",
        fr: "Gérone, Espagne"
      },
      tech: ["Kotlin", "Java", "Python", "MongoDB"],
      role: {
        en: "Software Engineer",
        es: "Ingeniero de Software",
        fr: "Ingénieur Logiciel"
      },
      highlights: {
        en: [
          "Led management and development of native Android app (Kotlin/Java).",
          "Integrated MongoDB and Redis for real-time electricity meter data.",
          "Automated internal processes using Python for OpenERP."
        ],
        es: [
          "Lideré la gestión y el desarrollo de una app nativa Android (Kotlin/Java).",
          "Integré MongoDB y Redis para datos de contadores eléctricos en tiempo real.",
          "Automaticé procesos internos con Python para OpenERP."
        ],
        fr: [
          "Dirigé la gestion et le développement d'une app Android native (Kotlin/Java).",
          "Intégré MongoDB et Redis pour les données de compteurs électriques en temps réel.",
          "Automatisé des processus internes avec Python pour OpenERP."
        ]
      }
    },
    {
      company: "Newronia",
      start: { year: 2016, month: 11 },
      end: { year: 2019, month: 12 } as { year: number; month: number } | null,
      location: {
        en: "Girona, Spain",
        es: "Girona, España",
        fr: "Gérone, Espagne"
      },
      tech: ["Java", "Python", "AWS"],
      role: {
        en: "Software Developer",
        es: "Desarrollador de Software",
        fr: "Développeur Logiciel"
      },
      highlights: {
        en: [
          "Developed Android (Java) app for indoor geolocation.",
          "Deployed AI-driven route calculation engine on AWS for a fleet of 50+ trucks."
        ],
        es: [
          "Desarrollé una app Android (Java) para geolocalización en interiores.",
          "Desplegué un motor de cálculo de rutas basado en IA en AWS para una flota de más de 50 camiones."
        ],
        fr: [
          "Développé une app Android (Java) pour la géolocalisation en intérieur.",
          "Déployé un moteur de calcul d'itinéraires basé sur l'IA sur AWS pour une flotte de plus de 50 camions."
        ]
      }
    }
  ],
  education: [
    {
      institution: "Universitat de Girona",
      grade: "8.75/10",
      year: "2017 – 2021",
      degree: {
        en: "Bachelor's Degree in Computer Engineering",
        es: "Grado en Ingeniería Informática",
        fr: "Licence en Génie Informatique"
      }
    },
    {
      institution: "IES Rafael Campalans",
      grade: "9.25/10",
      year: "2015 – 2017",
      degree: {
        en: "HNC in Multiplatform App Development",
        es: "CFGS en Desarrollo de Aplicaciones Multiplataforma",
        fr: "BTS en Développement d'Applications Multiplateformes"
      }
    },
    {
      institution: "IES Rafael Campalans",
      grade: "9.75/10",
      year: "2013 – 2015",
      degree: {
        en: "VET in Microcomputer Systems and Networks",
        es: "CFGM en Sistemas Microinformáticos y Redes",
        fr: "Bac Pro Systèmes Micro-informatiques et Réseaux"
      }
    }
  ],
  languages: [
    {
      language: { en: "Catalan", es: "Catalán", fr: "Catalan" },
      level: { en: "Native", es: "Nativo", fr: "Natif" }
    },
    {
      language: { en: "Spanish", es: "Español", fr: "Espagnol" },
      level: { en: "Native", es: "Nativo", fr: "Natif" }
    },
    {
      language: { en: "English", es: "Inglés", fr: "Anglais" },
      level: { en: "C1 (Professional)", es: "C1 (Profesional)", fr: "C1 (Professionnel)" }
    },
    {
      language: { en: "French", es: "Francés", fr: "Français" },
      level: { en: "B1 (Intermediate)", es: "B1 (Intermedio)", fr: "B1 (Intermédiaire)" }
    }
  ],
  // TODO: add selected projects here to enable the Projects section
  // (it stays hidden while this array is empty). Candidates:
  //  - Spoki GenAI product (OpenAI LLM + image generation)
  //  - AWS route-optimization engine (Newronia, fleet of 50+ trucks)
  projects: [] as {
    name: string;
    description: { en: string; es: string; fr: string };
    tech: string[];
    url?: string;
  }[]
};
