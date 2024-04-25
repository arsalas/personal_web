import { getImageUrl } from "../helpers/images";
import { Project } from "../hooks/useProjects";
import Tag from "./Tag";
import template from "../assets/screenshot/51shots_so.png";

export default function ProjectBox({
  description,
  tags,
  title,
  image,
  video,
}: Project) {
  return (
    <div className="text-slate-400 py-4">
      <article className="">
        <h2 className="text-2xl text-slate-300">{title}</h2>

        <p>{description}</p>
        <ul className="flex flex-wrap mt-5">
          {tags.map((tag) => (
            <li className="m-1" key={tag}>
              <Tag name={tag} />
            </li>
          ))}
        </ul>

        <figure>
          {image ? (
            <img src={getImageUrl(image)} alt="" />
          ) : (
            <div>
              <div className="relative">
                <div className="absolute frame">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video}`}
                    allowFullScreen
                  ></iframe>
                </div>
                <img className="" src={template} alt="" />
              </div>
            </div>
          )}
        </figure>
      </article>
    </div>
  );
}
