import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export interface Project {
  title: string;
  description: string;
  tags: Array<string>;
  image?: string;
  video?: string;
  url?: string;
  repo?: string;
}

const projects_es: Array<Project> = [
  {
    title: "DaVinci Awards",
    description:
      "El proyecto DaVinci Awards consiste en un programa que permite enviar candidaturas a los empleados de Amazon y un sistema de votaciones de estas para los jueces encargados de valorar las candidaturas.",
    tags: ["TypeScript", "Vue", "PHP", "HTML", "CSS", "MySQL"],
    image: "davinciawards.png",
  },
  {
    title: "David Dalmau",
    description:
      "Web personal y portafolio. Con un panel de administración para poder gestionar el contenido mostrado en la web.",
    tags: ["JavaScript", "Vue", "PHP", "HTML", "CSS", "MySQL"],
    image: "plavital.png",
    url: "https://www.plavital.com",
  },
  {
    title: "Xihui Yogini",
    description:
      "Diseñé y desarrollé un marketplace en Shopify, integrando múltiples pasarelas de pago, opciones de envío y sistemas de gestión de inventario. La plataforma cuenta con un panel de control intuitivo para los vendedores, facilitando la gestión de sus productos y pedidos.",
    tags: ["Shopify"],
    image: "xihui.png",
    url: "https://xihuiyogini.com/",
  },

  
];
const projects_en: Array<Project> = [
  {
    title: "DaVinci Award",
    description:
      "The DaVinci Awards project consists of a program that allows nominations to be sent to Amazon employees and a voting system for these to the judges in charge of evaluating the nominations.",
    tags: ["TypeScript", "Vue", "PHP", "HTML", "CSS", "MySQL"],
    image: "davinciawards.png",
  },
  {
    title: "David Dalmau Web",
    description:
      "Personal website and portfolio. With an administration panel to manage the content displayed on the web.",
    tags: ["JavaScript", "Vue", "PHP", "HTML", "CSS", "MySQL"],
    image: "plavital.png",
    url: "https://www.plavital.com",
  },
  {
    title: "Xihui Yogini",
    description:
      "I designed and developed a marketplace on Shopify, integrating multiple payment gateways, shipping options, and inventory management systems. The platform features an intuitive dashboard for sellers, facilitating the management of their products and orders",
    tags: ["Shopify"],
    image: "xihui.png",
    url: "https://xihuiyogini.com/",
  },

 
];

export function useProjects() {
  const { language } = useContext(LanguageContext);
  const [projects, setProjects] = useState<Project[]>(projects_es);

  useEffect(() => {
    fetchData();
  }, [language]);

  const fetchData = () => {
    if (language == "es") {
      setProjects(projects_es);
    } else {
      setProjects(projects_en);
    }
  };
  return {
    projects,
  };
}
