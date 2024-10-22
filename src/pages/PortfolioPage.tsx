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
        id="projects"
        className=" pt-10"
      >
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
      </article>
    </Section>
  );
}
