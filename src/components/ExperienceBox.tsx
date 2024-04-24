import { Experience } from "../hooks/useExperiences";
import Tag from "./Tag";

export default function ExperienceBox({
  date,
  description,
  tags,
  title,
  role,
}: Experience) {
  return (
    <div className="text-slate-400 flex py-10 gap-4">
      <aside className="w-60">
        <h2 className="my-1 text-right">{date}</h2>
      </aside>
      <article className="flex-1">
        <h2 className="text-2xl text-slate-300">
          {role} · {title}
        </h2>
        <p>{description}</p>
        <ul className="flex flex-wrap mt-5">
          {tags.map((tag) => (
            <li className="m-1" key={tag}>
              <Tag name={tag} />
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
