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
      "Desarrollador de videojuegos presenta su proyecto de parchís para arcade, diseñado en Unity. La interfaz táctil horizontal permite una interacción fluida para hasta 4 jugadores simultáneos. Con modos de juego individuales y por parejas, perfiles personalizables y un sistema de puntuación, este juego ofrece una experiencia completa y rejugable.",
    tags: ["Unity", "C#"],
    video: "1ZljRAOQPP8",
  },
  {
    title: "Elixir of Madness",
    description:
      'Juego realizado la Level Up Game Jam 2024 de tematica "Inteligencia Colectiva vs Locura Colectiva"',
    tags: ["Unreal Engine"],
    video: "azuFPTO57I4",
    url: "https://arsalas.itch.io/elixir-of-madness",
  },
  {
    title: "Plataformas 3D",
    description:
      "Este juego de plataformas 3D, desarrollado íntegramente en Unreal Engine 5, ofrece una experiencia desafiante y divertida. Los jugadores deberán demostrar sus habilidades de salto y precisión para superar obstáculos y derrotar a enemigos inteligentes que utilizan patrones de patrullaje y persecución. La física realista de las plataformas móviles añade un nivel extra de complejidad al gameplay. Además, el juego cuenta con un sistema de partículas personalizado que crea efectos visuales impresionantes, como explosiones y partículas de polvo. La recolección de monedas desbloquea nuevos niveles y mejoras para el personaje.",
    tags: ["Unreal Engine"],
    video: "R_U4iilHgsI",
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
      "A game developer presents a Parcheesi arcade game built using the Unity engine. Designed for a horizontal touchscreen interface, the game supports up to four players simultaneously. With multiplayer options, customizable avatars, and a progressive scoring system, this project demonstrates proficiency in game development, UI design, and player engagement.",
    tags: ["Unity", "C#"],
    video: "1ZljRAOQPP8",
  },
  {
    title: "Elixir of Madness",
    description:
      'Game build for Level Up Game Jam 2024 with subject "Collective Intelligence vs Collective Madness"',
    tags: ["Unreal Engine"],
    video: "azuFPTO57I4",
    url: "https://arsalas.itch.io/elixir-of-madness",
  },
  {
    title: "Plataformer 3D",
    description:
      "This 2D platformer, entirely developed in Unreal Engine 5, offers a challenging and fun experience. Players will need to demonstrate their jumping and precision skills to overcome obstacles and defeat cunning enemies that employ patrol patterns and pursuit tactics. The realistic physics of the moving platforms add an extra layer of complexity to the gameplay. Additionally, the game features a custom particle system that creates stunning visual effects, such as explosions and dust particles. Collecting coins unlocks new levels and character upgrades.",
    tags: ["Unreal Engine"],
    video: "R_U4iilHgsI",
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
