import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <Section>
      <article
        id="about"
        className="flex flex-col justify-center items-center p-4"
      >
        <div className="max-w-4xl">

          <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 ">
            {t("title.about")}
          </h2>
          <p className="container text-slate-400 my-5">{t("about")}</p>
        </div>
      </article>
    </Section>
  );
}
