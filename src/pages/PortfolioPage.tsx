import Section from "../components/Section";
import PortfolioBox from "../components/PorfolioBox";
// import { useTranslation } from "react-i18next";
import { usePortfolio } from "../hooks/usePortfolio";
import { useEffect } from "react";

export default function PortfolioPage() {
  const { portfolio } = usePortfolio();
  //   const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <article
        id="portfolio"
        className="flex flex-col justify-center items-center p-4"
      >
        <div className=" max-w-4xl">
          <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 ">
            Portfolio
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
