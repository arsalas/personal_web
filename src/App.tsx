import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18next from "i18next";
import NavBar from "./components/NavBar";
import { LanguageContext } from "./context/LanguageContext";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  const [language, setLanguage] = useState<string>(i18next.language);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainPage />
                <AboutPage />
                <ExperiencePage />
                <ProjectsPage />
              </>
            }
          />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
