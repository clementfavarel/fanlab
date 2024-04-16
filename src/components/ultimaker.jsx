import React, { useState } from "react";
import { container, SpacerY } from "./variables";
import img1 from "../images/ultimaker.jpg";
import img2 from "../images/casqueVR.png";
import img3 from "../images/hololens.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Equipement = () => {
  const [activeTitle, setActiveTitle] = useState("Ultimaker S5");
  const [fade, setFade] = useState(true);
  const titles = ["Ultimaker S5", "Vive Cosmos", "HoloLens 2"];
  const onSlideChange = (swiper) => {
    setFade(false);
    setTimeout(() => {
      setActiveTitle(titles[swiper.realIndex]);
      setFade(true);
    }, 300);
  };
  return (
    <section
      className="bg-blue-900 pt-20 pb-32 equipement relative"
      id="our-equipement"
    >
      <div className={`${container}`}>
        <div className="flex flex-wrap md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex flex-wrap">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper rounded-lg w-full"
              onSlideChange={onSlideChange}
            >
              <SwiperSlide>
                <img
                  src={img1}
                  alt="ultimaker"
                  className="equipementcarousel"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img2}
                  alt="vive cosmos"
                  className="equipementcarousel"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="HoloLens" className="equipementcarousel" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="pl-0 md:pl-10 md:w-1/2 text-white flex flex-col justify-center">
            <SpacerY size={30} />
            <div className="line"></div>
            <SpacerY size={30} />
            <h2 className="text-3xl uppercase">
              <span className="font-thin p-style">Notre équipement...</span>
              <br />
              <span
                className={`font-bold h2-style transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTitle}
              </span>
            </h2>
            <p className="mt-4">
              Pièces cassées, remplacements ou innovations, le FANLAB vous
              accompagne dans toute la démarche de conception de votre pièce 3D,
              de la modélisation à l'impression.
            </p>
            <SpacerY size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipement;
