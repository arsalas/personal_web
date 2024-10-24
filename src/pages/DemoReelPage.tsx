import Section from "../components/Section";
// import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function DemoReelPage() {
  //   const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Section>
      <article
        id="demo-reel"
        className="flex flex-col justify-center items-center p-4"
      >
        <div className=" max-w-4xl w-full">
          <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 ">
            Demo Reel
          </h2>
          <iframe
            className="aspect-video w-full mt-4"
            title="vimeo-player"
            src="https://player.vimeo.com/video/1021892715?h=a30d117be1"
          ></iframe>
       
        </div>
      </article>
    </Section>
  );
}
