import React, { useRef, useState, useEffect, useMemo } from "react";
import "../styles/swiperProject.css";
import { sectionTitleClass } from "./variables";
import cmst from "../images/cmst.webp";
import demineur from "../images/demineur.webp";
import orificedecoque from "../images/orificedecoque.webp";
import keops from "../images/keops.webp";
import flophibe from "../images/flophibe.webp";
import plongeur from "../images/plongeur.webp";
import { container } from "../components/variables";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import windowsIcon from "../images/icon/windows.svg";
import iosIcon from "../images/icon/ios.svg";
import androidIcon from "../images/icon/android.svg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Itproject = () => {
  const swiperRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(plongeur);
  const faqData = useMemo(
    () => [
      {
        projet: "Plongeur",
        description:
          "Connaître les paliers de décompression selon différentes données pour les plongeurs.",
        img: plongeur,
        link: "/application/plongeur.apk",
        platforms: ["android", "ios"],
      },
      {
        projet: "CMS-T",
        description:
          "Codé sous C# ce projet va simuler un CMST de FREMM pour que les marins puissent s'entrainer à manipuler cette interface avant de l'utiliser.",
        img: cmst,
        platforms: ["windows"],
      },
      {
        projet: "Wicops",
        description:
          "Ce projet a pour vocation d'améliorer le système KEOPS qui permet le transfert de données entre le bâtiment et une équipe projetée (visite, évacuation de ressortissants...)",
        img: keops,
        platforms: [],
      },
      {
        projet: "Démineur",
        description:
          "Cette application Android a pour but d'aider les plongeurs démineur en leur proposant une calculette adaptée à leur besoin. Calcul de poids de charge, de rayon d'explosion, de périmètre etc...",
        img: demineur,
        platforms: ["android"],
      },
      {
        projet: "Flophib",
        description:
          "Faciliter la reconnaissance des plages pour les débarquements des unités amphibies.",
        img: flophibe,
        platforms: ["windows"],
      },
      {
        projet: "Orifice de coque",
        description:
          "Cette application permet de connaitre les orifices immergés, en fonction du tirant d'eau bord et de la quille. Elle est utile après un arrêt technique.",
        img: orificedecoque,
        platforms: ["android", "windows"],
      },
    ],
    []
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      const changeBackground = () => {
        const { activeIndex } = swiperInstance;
        setBackgroundImage(faqData[activeIndex].img);
      };
      swiperInstance.on("slideChange", changeBackground);
      return () => {
        swiperInstance.off("slideChange", changeBackground);
      };
    }
  }, [swiperRef, faqData]);
  return (
    <>
      <section
        id="projets"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "darken",
        }}
        className="itproject py-48 bg-cover bg-center backgroundTransition"
      >
        <h2 className={`${sectionTitleClass} text-white relative`}>
          NOS PROJETS FANLAB
        </h2>
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: false,
          }}
          // autoplay={{
          //   delay: 3000,
          // }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="p_swiper"
        >
          {faqData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="c_swiper rounded-lg"
              onClick={() => swiperRef.current.swiper.slideTo(index)}
            >
              <div
                className={`max-w-xl py-6 rounded overflow-hidden shadow-lg ${container}`}
              >
                <div className="mb-6">
                  <div className="p-style mb-2">{item.projet}</div>
                  <p className="text-gray-700 md:text-base text-xs text-left">
                    {item.description}
                  </p>
                </div>
                {item.platforms.length > 0 && (
                  <>
                    <hr />
                    <div className="pt-6  ">
                      <div className="flex items-center">
                        <p className="flex items-center md:text-base text-xs">
                          Disponible sur :
                        </p>
                        {item.platforms.includes("android") && (
                          <div className="flex items-center ml-2">
                            <div className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
                              <p className="text-xs mr-1">ANDROID</p>
                              <img
                                className="h-4 w-4"
                                src={androidIcon}
                                alt="Android"
                              />
                            </div>
                          </div>
                        )}
                        {item.platforms.includes("ios") && (
                          <div className="flex items-center ml-2">
                            <div className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center">
                              <p className="text-xs mr-1">IOS</p>
                              <img
                                className="h-4 w-4"
                                src={iosIcon}
                                alt="iOS"
                              />
                            </div>
                          </div>
                        )}
                        {item.platforms.includes("windows") && (
                          <div className="flex items-center ml-2">
                            <div className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center">
                              <p className="text-xs mr-1">WINDOWS</p>
                              <img
                                className="h-4 w-4"
                                src={windowsIcon}
                                alt="Windows"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
export default Itproject;
