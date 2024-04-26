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
  },

  {
    title: "Space Stealth",
    description:
      "Juego en 3 persona de infiltracion. Este es mi proyecto final del master de diseño y programacion de videojuegos con Unreal Engine.",
    tags: ["Unreal Engine"],
    video: "608fGLKgook",
  },
  {
    title: "Parchis",
    description:
      "Juego de parchis creado para una maquina de arcade donde se puede jugar contra 4 jugadores y crear un perfil de jugador.",
    tags: ["Unreal Engine", "C++"],
    video: "WMrV7jWcu0k",
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
  },

  {
    title: "Space Stealth",
    description:
      "Third-person infiltration game. This is my final project of the master's degree in video game design and programming with Unreal Engine.",
    tags: ["Unreal Engine"],
    video: "608fGLKgook",
  },
  {
    title: "Parcheesi",
    description:
      "Parcheesi game created for arcade machine where you can play against 4 players and create a player profile. You can accumulate points with your player profile.",
    tags: ["Unreal Engine", "C++"],
    video: "WMrV7jWcu0k",
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
