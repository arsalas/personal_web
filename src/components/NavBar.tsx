import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <>
      <nav className="fixed w-full bg-gradient-to-r from-blue-950/50 to-blue-900/50 hidden sm:block z-50">
        <ul className="flex flex-row justify-end text-white p-2">
          <li className="px-4">
            <a className="group flex items-center py-3 active" href="#about">
              {t("title.about")}
            </a>
          </li>
          <li className="px-4">
            <a
              className="group flex items-center py-3 active"
              href="#experience"
            >
              {t("title.experience")}
            </a>
          </li>
          <li className="px-4">
            <a className="group flex items-center py-3 active" href="#projects">
              {t("title.projects")}
            </a>
          </li>
          <li className="">
            <LanguageSelector />
          </li>
        </ul>
      </nav>
      <div className="block sm:hidden fixed w-full py-2 bg-gradient-to-r from-blue-950/90 to-blue-900/90 z-50">
        <div className="flex justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-slate-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
          <div>
            <LanguageSelector />
          </div>
        </div>
        {isOpen && (
          <ul className="animate__animated animate__fadeIn animate__faster flex flex-col justify-end text-white p-2 ">
            <li className="px-4">
              <a
                className="group flex items-center py-3 active"
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                {t("title.about")}
              </a>
            </li>
            <li className="px-4">
              <a
                onClick={() => setIsOpen(false)}
                className="group flex items-center py-3 active"
                href="#experience"
              >
                {t("title.experience")}
              </a>
            </li>
            <li className="px-4">
              <a
                onClick={() => setIsOpen(false)}
                className="group flex items-center py-3 active"
                href="#projects"
              >
                {t("title.projects")}
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
