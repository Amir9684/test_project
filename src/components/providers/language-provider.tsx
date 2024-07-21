import { createContext, useContext, useState } from "react";
import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { useSelector } from "react-redux";

const apiKey = "mwyS5-QzDjLDIpg1bvB7Pw";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en", "fa"],

    backend: {
      loadPath: loadPath,
    },
  });
const LanguageContext = createContext({
  lang: "en",
  setLanguage: (value: string) => {},
});

function useLanguage() {
  return useContext(LanguageContext);
}

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: any) => state.user);

  const [lang, setLang] = useState(user.language);

  const setLanguage = (value: string) => {
    const pathname = window.location.pathname;
    window.location.replace(
      "http://localhost:5173" + pathname + "?lng=" + value
    );
    setLang(value);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { useLanguage, LanguageProvider };
