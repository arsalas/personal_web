export interface Experience {
  title: string;
  date: string;
  role: string;
  description: string;
  tags: Array<string>;
}

const experiences: Array<Experience> = [
  {
    title: "Freelance",
    date: "SEPT 2022 — PRESENT",
    role: "Software Developer",
    description:
      "Como freelance he realizado proyectos para grandes empresas como Amazon, donde he podido implementar soluciones para mis clientes",
    tags: [
      "JavaScript",
      "TypeScript",
      "Vue",
      "PHP",
      "HTML",
      "CSS",
      "MySQL",
      "NodeJs",
      "Unreal Engine",
    ],
  },
  {
    title: "Avantgarde IT",
    date: "AUG 2023 — PRESENT",
    role: "Full Stack Developer Freelance",
    description:
      "Profesor encargado de liderar el bootcamp de Front-end de desarrollo web.",
    tags: [
      "TypeScript",
      "Vue",
      "HTML",
      "CSS",
      "NodeJs",
      "NestJs",
      "PostgreSQL",
    ],
  },

  {
    title: "Dare Planet",
    date: "DEC 2023 — JAN 2024",
    role: "Database Managment Freelance",
    description:
      "Profesor encargado de liderar el bootcamp de Front-end de desarrollo web.",
    tags: ["MySQL"],
  },

  {
    title: "Ironhack (Freelance)",
    date: "SEPT 2022 — NOV 2022",
    role: "Lead Teacher",
    description:
      "Profesor encargado de liderar el bootcamp de Front-end de desarrollo web.",
    tags: ["JavaScript", "Vue", "HTML", "CSS"],
  },
  {
    title: "Social Labs",
    date: "JAN 2022 — AUG 2021",
    role: "Full Stack Developer",
    description:
      "Desarrollador Full Stack en Social Labs. Dentro de la empresa lleve a cabo proyectos retadores para mi carrera como Market Yastas, un gran ecomerce para los pequeños comercios de México donde podían realizar sus pedidos mediante créditos bancarios desde la misma aplicación. ",
    tags: ["JavaScript", "Vue", "PHP", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Captura Electrónica",
    date: "OCT 2019 — NOV 2019",
    role: "Web Developer",
    description:
      "En Captura Electrónica pude iniciar un proyecto para trasladar la gestión de la empresa de Access a un panel de administración web.",
    tags: ["PHP", "HTML", "CSS", "MySQL"],
  },
];

export function useExperiences() {
  return {
    experiences,
  };
}
