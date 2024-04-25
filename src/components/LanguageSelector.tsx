import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";
import FlagIcon from "./FlagIcon";

export default function LanguageSelector() {
  interface Language {
    key: string;
    name: string;
  }

  const { i18n, t } = useTranslation();
  const { setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  async function handleLanguageChange(language: Language): Promise<void> {
    await i18n.changeLanguage(language.key);
    setLanguage(language.key);
    setIsOpen(false);
  }

  const languages = [
    { key: "es", name: t("spanish") },
    { key: "en", name: t("english") },
  ];
  // TODO: Revisar esto porque no funciona bien llega es-ES
  const selectedLanguage =
    languages.find(
      (language) => language.key === i18n.language.split("-")[0]
    ) || languages[1];

  const LANGUAGE_SELECTOR_ID = "language-selector";

  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest("button");
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <div className="flex items-center h-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md border border-gray-300/0 shadow-sm px-4 py-2 bg-blue-950/0 text-sm font-medium text-slate-200  focus:outline-none"
          id={LANGUAGE_SELECTOR_ID}
          aria-expanded={isOpen}
        >
          {selectedLanguage && (
            <>
              <FlagIcon countryCode={selectedLanguage.key} />
              <span className="ml-4">{selectedLanguage.name}</span>
            </>
          )}

          <svg
            className="-me-1 ms-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-blue-950/50 text-slate-200"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className="py-1 grid grid-cols-2 gap-2" role="none">
            {languages.map((language, index) => {
              return (
                <button
                  key={language.key}
                  onClick={() => handleLanguageChange(language)}
                  className={`${
                    selectedLanguage!.key === language.key
                      ? "bg-blue-950 text-slate-100"
                      : "text-slate-200"
                  } block px-4 py-2 text-sm text-start items-center  hover:bg-blue-900 ${
                    index % 2 === 0 ? "rounded-r" : "rounded-l"
                  }`}
                  role="menuitem"
                >
                  <div className="flex gap-4 items-center">
                    <FlagIcon countryCode={language.key} />
                    <span className="truncate ">{language.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
