import ExperienceBox from "../components/ExperienceBox";
import Section from "../components/Section";
import { useExperiences } from "../hooks/useExperiences";

export default function ExperiencePage() {
  const { experiences } = useExperiences();
  return (
    <Section>
      <article
        id="experience"
        className="flex flex-col justify-center items-center min-h-svh"
      >
        <div className=" max-w-4xl">
          <h2 className="text-4xl font-semibold text-slate-200 mb-5 text-center">
            Experience
          </h2>

          {experiences.map(({ date, description, tags, title,role }) => (
            <ExperienceBox
              key={title}
              date={date}
              description={description}
              tags={tags}
              title={title}
			  role={role}
            />
          ))}
        </div>
      </article>
    </Section>
  );
}
