import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import LinkIcon from "../components/LinkIcon";
import portrait from "../assets/portrait2.jpeg";

export default function MainPage() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="flex justify-center items-center flex-col min-h-svh p-4">
        <h1 className="text-5xl font-bold text-slate-200 my-5">
          Alberto Ramirez Salas
        </h1>
        <h2 className="text-3xl font-semibold text-slate-200 my-5">
          {t("headline")}
        </h2>
        <h3 className="text-2xl font-semibold text-slate-400 my-5">
          {t("bio")}
        </h3>
        <img style={{ borderRadius: "50%" }} src={portrait} alt="" />

        <ul className="flex gap-2 mt-12">
          <li className="">
            <LinkIcon
              icon={<FaLinkedin />}
              href="https://www.linkedin.com/in/alberto-ramirez-salas/"
            />
          </li>
          <li>
            <LinkIcon icon={<FaGithub />} href="https://github.com/arsalas" />
          </li>
          <li>
            <LinkIcon
              icon={<FaEnvelope />}
              href="mailto:a.ramir.sa@gmail.com"
            />
          </li>
        </ul>
      </div>
    </Section>
  );
}
