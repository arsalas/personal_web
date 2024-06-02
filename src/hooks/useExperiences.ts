import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export interface Experience {
  title: string;
  date: string;
  role: string;
  description: string;
  tags: Array<string>;
}

const experiences_es: Array<Experience> = [
  {
    title: "Freelance",
    date: "SEPT 2022 — PRESENTE",
    role: "Software Developer",
    description: `Crear y diseñar aplicaciones web, sistemas de diseño, aplicaciones móviles y videojuegos de alta calidad para una amplia gama de clientes utilizando tecnologías como JavaScript, TypeScript, React, Vue, NodeJs, Unreal Engine y más.
	Profesor particular para estudiantes que quieran mejorar sus conocimientos.
	Enseñar y orientar a los estudiantes.`,
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
    title: "Avantgarde IT (Freelance)",
    date: "AGOSTO 2023 — PRESENTE",
    role: "Full Stack Developer",
    description: `Desarrollar nuevas funcionalidades en la plataform Front End.
	Corregir errores en otras funciones.
	Crear nuevas funciones para la REST Api del Back End.
	Utilizar Vue con Quasar para crear interfaces de usuario
	Utilizar NestJS y PrismaORM para crear REST Api.`,
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
    title: "Ironhack (Freelance)",
    date: "SEPT 2022 — NOV 2022",
    role: "Lead Teacher",
    description: `Liderar un equipo de instructores en Front End Bootcamp con HTML, CSS, JavaScript, Vue.js y Git.
	Desarrollar y ejecutar planes de lecciones integrales.
	Impartir de clases dinámicas e interactivas.`,
    tags: ["JavaScript", "Vue", "HTML", "CSS"],
  },
  {
    title: "Social Labs",
    date: "ENERO 2022 — AGOSTO 2021",
    role: "Full Stack Developer",
    description: `Migrar a un panel de administración de aplicación web para una aplicación empresarial.
	Crear nuevas funciones en el panel de administración para una aplicación de una cadena de hoteles.
	Crear una aplicación de mercado con un panel de administración para tiendas, permitiendo pedidos seguros a proveedores y pagos mediante crédito bancario.
	Construir procedimientos de base de datos.`,
    tags: ["JavaScript", "Vue", "PHP", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Captura Electrónica",
    date: "OCT 2019 — NOV 2019",
    role: "Web Developer",
    description: `Diseñar y desarrollar la interfaz de usuario del panel de administración.
	Implementación de lógica del lado del servidor para la gestión de datos.
	Conexión del panel de administración a la base de datos MySQL.`,
    tags: ["PHP", "HTML", "CSS", "MySQL"],
  },
];

const experiences_en: Array<Experience> = [
  {
    title: "Freelance",
    date: "SEPT 2022 — PRESENT",
    role: "Software Developer",
    description: `Build, style, and ship high-quality web apps, design systems, mobile apps and video games for a diverse array of clients using technologies such as JavaScript, TypeScript, React, Vue, NodeJs, Unreal Engine and more.
	Private teacher for students who want to improve their Knowledge.
	Teach and mentor students.`,
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
    title: "Avantgarde IT (Freelance)",
    date: "AUG 2023 — PRESENT",
    role: "Full Stack Developer",
    description: `Develop new features at Front End Platform.
	Fix bugs in others features.
	Create new features at Back End REST Api.
	Use Vue with Quasar for build user interfaces
	Use NestJS and PrismaORM for build REST Api.`,
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
    title: "Ironhack (Freelance)",
    date: "SEPT 2022 — NOV 2022",
    role: "Lead Teacher",
    description: `Lead a team of instructors at Front End Bootcamp with HTML, CSS, JavaScript, Vue.js and Git.
	  Developing and executing comprehensive lesson plans.
	  Delivering dynamic and interactive classes.`,
    tags: ["JavaScript", "Vue", "HTML", "CSS"],
  },
  {
    title: "Social Labs",
    date: "JAN 2022 — AUG 2021",
    role: "Full Stack Developer",
    description: `Migrate to a web app admin panel for an enterprise application.
	Build new features at admin panel for a hotel chain app.
	Created a marketplace application with an admin panel for stores, enabling secure orders from suppliers and payments via bank credit.
	Build database procedures.`,
    tags: ["JavaScript", "Vue", "PHP", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Captura Electrónica",
    date: "OCT 2019 — NOV 2019",
    role: "Web Developer",
    description: `Design and develop the admin panel user interface.
	  Implementing server-side logic for data managment.
	  Connecting the admin panel to the MySQL database.`,
    tags: ["PHP", "HTML", "CSS", "MySQL"],
  },
];

export function useExperiences() {
  const { language } = useContext(LanguageContext);
  const [experiences, setExperiences] = useState<Experience[]>(experiences_es);

  useEffect(() => {
    fetchData();
  }, [language]);

  const fetchData = () => {
    if (language == "es") {
      setExperiences(experiences_es);
    } else {
      setExperiences(experiences_en);
    }
  };
  return {
    experiences,
  };
}
