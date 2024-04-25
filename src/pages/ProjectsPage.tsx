import Section from "../components/Section";
import { useProjects } from "../hooks/useProjects";
import ProjectBox from "../components/ProjectBox";

export default function ProjectsPage() {
  const { projects } = useProjects();

  return (
    <Section>
      <article
        id="projects"
        className="flex flex-col justify-center items-center p-4"
      >
        <div className=" max-w-4xl">
          <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 ">
            Projects
          </h2>

          {projects.map(({ description, tags, title, image, video }) => (
            <ProjectBox
              description={description}
              tags={tags}
              title={title}
              image={image}
              key={title}
              video={video}
            />
          ))}
        </div>
      </article>
    </Section>
  );
}
