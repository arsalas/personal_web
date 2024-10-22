import { getImageUrl } from "../helpers/images";
import Tag from "./Tag";
import { useTranslation } from "react-i18next";
import { Portfolio } from "../hooks/usePortfolio";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export default function PortfolioBox({
  description,
  tags,
  title,
  images,
  video,
  url,
}: Portfolio) {
  const { t } = useTranslation();
  const imagesCarousel = images.map((image) => ({
    src: getImageUrl(image),
    alt: "",
  }));

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, [sliderRef1, sliderRef2]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  const settingsThumbnail = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="text-slate-400 h-svh flex flex-col justify-center items-center"
      //   style={{ backgroundImage: `url(${imagesCarousel[0].src})` }}
    >
      <div className="content">
        <div className="max-w-4xl">
          <article className="p-2">
            <h2 className="text-4xl text-slate-300 ">{title}</h2>
            <p className="mt-4">{description}</p>
            <ul className="flex flex-wrap mt-5">
              {tags.map((tag) => (
                <li className="m-1" key={tag}>
                  <Tag name={tag} />
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <div style={{ maxWidth: "92vw", overflow: "hidden" }}>
                <Slider
                  {...settings}
                  arrows={true}
                  lazyLoad="ondemand"
                  asNavFor={nav2!}
                  ref={sliderRef1}
                >
                  <iframe
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    src={`https://www.youtube.com/embed/${video}?autoplay=0&mute=0&controls=1&loop=1&rel=0&showinfo=0`}
                    allowFullScreen
                  ></iframe>
                  {imagesCarousel.map((image, index) => (
                    <div key={index}>
                      <img
                        className="aspect-video w-full"
                        style={{ objectFit: "contain" }}
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div style={{ maxWidth: "92vw", overflow: "hidden" }}>
                <Slider
                  className="gap-2"
                  asNavFor={nav1!}
                  ref={sliderRef2}
                  slidesToShow={5}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  arrows={false}
                  infinite={false}
                  swipe={true}
                  {...settingsThumbnail}
                >
                  <img
                    className="aspect-video w-full"
                    src="data:image/png;base64,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"
                  />
                  {imagesCarousel.map((image, index) => (
                    <div key={index}>
                      <img
                        className="aspect-video w-full"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              {url && (
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 font-semibold text-slate-200 group/link text-base"
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("view")}
                </a>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
