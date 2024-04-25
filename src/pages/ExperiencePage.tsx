import { useTranslation } from "react-i18next";
import ExperienceBox from "../components/ExperienceBox";
import Section from "../components/Section";
import { useExperiences } from "../hooks/useExperiences";

export default function ExperiencePage() {
  const { t } = useTranslation();

  const { experiences } = useExperiences();
  return (
    <Section>
      <article
        id="experience"
        className="flex flex-col justify-center items-center p-4"
      >
        <div className=" max-w-4xl">
          <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 ">
            {t("title.experience")}
          </h2>

          {experiences.map(({ date, description, tags, title, role }) => (
            <ExperienceBox
              key={title}
              date={date}
              description={description}
              tags={tags}
              title={title}
              role={role}
            />
          ))}

          <div className="my-8">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 font-semibold text-slate-200 group/link text-base"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <span>
			  {t("resume")}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg> */}
               
              </span>
            </a>
          </div>
        </div>
      </article>
    </Section>
  );
}
