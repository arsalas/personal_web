import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export interface Portfolio {
  title: string;
  description: string;
  tags: Array<string>;
  images: Array<string>;
  video: string;
  url?: string;
  repo?: string;
}

const portfolio_es: Array<Portfolio> = [
  {
    title: "Space Stealth",
    description:
      "Desarrollo de un videojuego en Unreal Engine 4 basado en Metal Gear Solid para proyecto final de máster. El juego presenta un sistema de IA enemigo con detección visual y auditiva, permitiendo al jugador emplear tácticas de sigilo. El protagonista cuenta con un amplio repertorio de movimientos y habilidades, incluyendo correr, agacharse y nadar. Se ha implementado un sistema de armas versátil, con diferentes tipos de proyectiles y accesorios como miras telescópicas. El diseño de niveles incorpora elementos interactivos como visión nocturna (utilizando shaders) y puzzles que requieren el uso de objetos específicos. El clímax del juego es una intensa batalla contra un jefe final con patrones de ataque adaptables.",
    tags: [
      "Unreal Engine 4",
      "3DMax",
      "Blender",
      "Mixamo",
      "Substance Painter",
      "Photoshop",
    ],
    video: "608fGLKgook",
    images: [
      "space1.png",
      "space2.png",
      "space3.png",
      "space4.png",
      "space5.png",
      "space6.png",
      "space7.png",
      "space8.png",
      "space9.png",
      "space10.png",
      "space11.png",
    ],
  },
  {
    title: "Parchis",
    description:
      "Desarrollador de videojuegos presenta su proyecto de parchís para arcade, diseñado en Unity. La interfaz táctil horizontal permite una interacción fluida para hasta 4 jugadores simultáneos. Con modos de juego individuales y por parejas, perfiles personalizables y un sistema de puntuación, este juego ofrece una experiencia completa y rejugable.",
    tags: ["Unity", "C#"],
    video: "1ZljRAOQPP8",
    images: ["parchis1.png", "parchis2.png", "parchis3.png", "parchis4.png"],
  },
  {
    title: "Elixir of Madness",
    description:
      "Desarrollo de un prototipo de juego cooperativo en Unreal Engine 5 para la Game Jam Level Up 2024. El proyecto consistió en la creación de un sistema de juego cooperativo para tres jugadores, cada uno con habilidades únicas (guerrero, mago, arquero). Se implementaron mecánicas de combate, exploración de mazmorras y resolución de puzzles básicos. Para lograr una experiencia de juego fluida, se utilizó un sistema de navegación de personajes (AI) y un sistema de detección de colisiones. El juego cuenta con un sistema de guardado básico y un menú principal funcional. La programación se realizó principalmente en Blueprint.",
    tags: ["Unreal Engine"],
    video: "azuFPTO57I4",
    url: "https://arsalas.itch.io/elixir-of-madness",
    images: [
      "elixir1.png",
      "elixir2.png",
      "elixir3.png",
      "elixir4.png",
      "elixir5.png",
    ],
  },
  {
    title: "Plataformas 3D",
    description:
      "Este juego de plataformas 3D, desarrollado íntegramente en Unreal Engine 5, ofrece una experiencia desafiante y divertida. Los jugadores deberán demostrar sus habilidades de salto y precisión para superar obstáculos y derrotar a enemigos inteligentes que utilizan patrones de patrullaje y persecución. La física realista de las plataformas móviles añade un nivel extra de complejidad al gameplay. Además, el juego cuenta con un sistema de partículas personalizado que crea efectos visuales impresionantes, como explosiones y partículas de polvo. La recolección de monedas desbloquea nuevos niveles y mejoras para el personaje.",
    tags: ["Unreal Engine 5", "C++"],
    video: "R_U4iilHgsI",
    images: [
      "platform1.png",
      "platform2.png",
      "platform3.png",
      "platform4.png",
      "platform5.png",
      "platform6.png",
    ],
  },
  {
    title: "Cub 3D Ray-Casting",
    description:
      "Como parte del currículo de 42, se llevó a cabo el proyecto cub3D, un homenaje al pionero Wolfenstein 3D. El objetivo principal fue comprender los principios detrás de los motores de renderizado en 3D, utilizando C y miniLibX. A través de la implementación de un algoritmo de ray-casting, se logró crear una representación tridimensional de un laberinto. Este proyecto no solo sirvió para reforzar conocimientos en programación, sino también para aplicar conceptos matemáticos como la trigonometría y la geometría en un contexto práctico.",
    tags: ["C", "Ray-Casting", "MiniLibX"],
    video: "Dd3onD8Rz24",
    images: ["cub1.png", "cub2.png", "cub3.png", "cub4.png"],
  },
  {
    title: "Global Game Jam - Team From 42 Barcelona",
    description:
      "In This Game The Player Takes Part In An Epic Journey About Survival. Your Skills Will Be Tested Both By The Environment And Yourself, By A Collectible System. Explore Your Surroundings And Keep Yourself Alive Until The Next Age Comes. The character moves with the W A S D / Arrow keys and releases the objects with the space bar.",
    tags: ["Unreal Engine 4"],
    video: "jVtWhs37J-E",
    images: ["root1.png", "root2.png", "root3.png", "root4.png"],
  },
];
const portfolio_en: Array<Portfolio> = [
  {
    title:
      "Degree in video game design and programming with Unreal Engine Final Project",
    description:
      "A video game developed in Unreal Engine 4 based in Metal Gear Solid for my master's thesis. The game features enemy AI with sight and hearing, enabling stealth gameplay. The protagonist can run, crouch, and swim, while a variety of weapons and gadgets, like scopes, are available. Levels include interactive elements such as night vision and puzzle-solving. The game culminates in a challenging boss fight with adaptive tactics.",
    tags: [
      "Unreal Engine 4",
      "3DMax",
      "Blender",
      "Mixamo",
      "Substance Painter",
      "Photoshop",
    ],
    video: "608fGLKgook",
    images: [
      "space1.png",
      "space2.png",
      "space3.png",
      "space4.png",
      "space5.png",
      "space6.png",
      "space7.png",
      "space8.png",
      "space9.png",
      "space10.png",
      "space11.png",
    ],
  },
  {
    title: "Parcheesi",
    description:
      "A game developer presents a Parcheesi arcade game built using the Unity engine. Designed for a horizontal touchscreen interface, the game supports up to four players simultaneously. With multiplayer options, customizable avatars, and a progressive scoring system, this project demonstrates proficiency in game development, UI design, and player engagement.",
    tags: ["Unity", "C#", "Photoshop"],
    video: "1ZljRAOQPP8",
    images: ["parchis1.png", "parchis2.png", "parchis3.png", "parchis4.png"],
  },
  {
    title: "Game Jam Level Up 2024",
    description:
      "Development of a cooperative game prototype in Unreal Engine 5 for the Level Up 2024 Game Jam. The project involved creating a cooperative gameplay system for three players, each with unique abilities (warrior, mage, archer). Combat mechanics, dungeon exploration, and basic puzzle solving were implemented. To achieve a seamless gameplay experience, a character navigation system (AI) and a collision detection system were utilized. The game features a basic save system and a functional main menu. Programming was primarily done in Blueprint.",
    tags: ["Unreal Engine", "Blender"],
    video: "azuFPTO57I4",
    url: "https://arsalas.itch.io/elixir-of-madness",
    images: [
      "elixir1.png",
      "elixir2.png",
      "elixir3.png",
      "elixir4.png",
      "elixir5.png",
    ],
  },
  {
    title: "Plataformer 3D",
    description:
      "This 2D platformer, entirely developed in Unreal Engine 5, offers a challenging and fun experience. Players will need to demonstrate their jumping and precision skills to overcome obstacles and defeat cunning enemies that employ patrol patterns and pursuit tactics. The realistic physics of the moving platforms add an extra layer of complexity to the gameplay. Additionally, the game features a custom particle system that creates stunning visual effects, such as explosions and dust particles. Collecting coins unlocks new levels and character upgrades.",
    tags: ["Unreal Engine 5", "C++"],
    video: "R_U4iilHgsI",
    images: [
      "platform1.png",
      "platform2.png",
      "platform3.png",
      "platform4.png",
      "platform5.png",
      "platform6.png",
    ],
  },
  {
    title: "Cub 3D Ray-Casting",
    description:
      "Within the 42 curriculum, the cub3D project was developed as a tribute to the groundbreaking Wolfenstein 3D. The main goal was to understand the mechanisms behind 3D rendering engines using C and miniLibX. Through the implementation of a ray-casting algorithm, a 3D maze was created. This project not only reinforced programming skills but also allowed for the application of mathematical concepts like trigonometry and geometry in a practical setting.",
    tags: ["C", "Ray-Casting", "MiniLibX"],
    video: "Dd3onD8Rz24",
    images: ["cub1.png", "cub2.png", "cub3.png", "cub4.png"],
  },
  {
    title: "Global Game Jam - Team From 42 Barcelona",
    description:
      "In This Game The Player Takes Part In An Epic Journey About Survival. Your Skills Will Be Tested Both By The Environment And Yourself, By A Collectible System. Explore Your Surroundings And Keep Yourself Alive Until The Next Age Comes. The character moves with the W A S D / Arrow keys and releases the objects with the space bar.",
    tags: ["Unreal Engine 4"],
    video: "jVtWhs37J-E",
    images: ["root1.png", "root2.png", "root3.png", "root4.png"],
  },
];

export function usePortfolio() {
  const { language } = useContext(LanguageContext);
  const [portfolio, setPortfolio] = useState<Portfolio[]>(portfolio_es);

  useEffect(() => {
    fetchData();
  }, [language]);

  const fetchData = () => {
    if (language == "es") {
      setPortfolio(portfolio_es);
    } else {
      setPortfolio(portfolio_en);
    }
  };
  return {
    portfolio,
  };
}
