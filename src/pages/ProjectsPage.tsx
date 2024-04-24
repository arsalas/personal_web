import Section from "../components/Section";

import img from "../assets/images/davinciawards.png";
import { useProjects } from "../hooks/useProjects";
import ProjectBox from "../components/ProjectBox";

export default function ProjectsPage() {
  const { projects } = useProjects();

  return (
    <Section>
      <article
        id="projects"
        className="flex flex-col justify-center items-center min-h-svh"
      >
        <div className=" max-w-4xl">
          <h2 className="text-4xl font-semibold text-slate-200 mb-5 text-center">
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
