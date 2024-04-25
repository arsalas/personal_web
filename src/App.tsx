import i18next from "i18next";
import NavBar from "./components/NavBar";
import { LanguageContext } from "./context/LanguageContext";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState<string>(i18next.language);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <NavBar />
      <MainPage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
    </LanguageContext.Provider>
  );
}

export default App;
