import Section from "../components/Section";
import PortfolioBox from "../components/PorfolioBox";
import { useTranslation } from "react-i18next";
import { usePortfolio } from "../hooks/usePortfolio";

export default function PortfolioPage() {
  const { portfolio } = usePortfolio();
  const { t } = useTranslation();
  return (
    <Section>
      <article
        id="projects"
        className="flex flex-col justify-center items-center p-4 pt-20"
      >
        <div className=" max-w-4xl">
          <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 ">
            {t("title.portfolio")}
          </h2>

          {portfolio.map(({ description, tags, title, images, video, url }) => (
            <PortfolioBox
              description={description}
              tags={tags}
              title={title}
              images={images}
              key={title}
              video={video}
              url={url}
            />
          ))}
        </div>
      </article>
    </Section>
  );
}
