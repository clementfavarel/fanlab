import React from "react";

import { container, sectionTitleClass, SpacerY } from "./variables";
import img1 from "../images/icon/force.svg";
import img2 from "../images/icon/goal.svg";
import img3 from "../images/icon/gear.svg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Body = () => {
  const Card = ({ title, content, image }) => (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg  hover:shadow-xl transition">
      <div className="flex justify-center ">
        <img src={image} className="w-10" alt="icon" />
      </div>
      <h5 className=" text-2xl font-bold tracking-tight text-gray-900 text-center my-4">
        {title}
      </h5>
      <p className="font-normal text-gray-700 md:text-justify text-left">
        {content}
      </p>
    </div>
  );

  const cardsData = [
    {
      image: img1,
      title: "Nos forces",
      content:
        "Notre atout majeur est que nous sommes au plus près des marins du faite qu'on est localisé au GTR.",
    },
    {
      image: img2,
      title: "Nos missions",
      content:
        "Nous réalisons des projets proposés par les marins. Pour les aider dans leur vie quotidienne.",
    },
    {
      title: "Nos équipements",
      content:
        "Nous avons à notre disposition, une imprimante 3D, une dremel, un casque MR etc...",
      image: img3,
    },
  ];
  return (
    <main className="py-10" id="main">
      <section className={`presentation ${container}`} id="presentation">
        <h2 className={sectionTitleClass}>
          <div className="line_black m-auto"></div>
          <SpacerY size="30px" />
          <span className="font-black text-left h1-style uppercase py-0">
            Qu'est ce que LE FANLAB ?
          </span>
          <br />
        </h2>
        <div className="block  p-6 bg-white border border-gray-200 rounded-lg hover:shadow-xl transition mb-4">
          <p className="font-normal text-gray-700 text-justify">
            Le FANLab, agissant comme incubateur d'innovations au sein de la
            Force d'Action Navale, répond à un besoin crucial de transposer les
            idées novatrices des marins en solutions techniques concrètes. Plus
            qu'un simple laboratoire, il offre un éventail de services
            numériques et crée un environnement stimulant où chaque idée est
            valorisée et développée en collaboration, garantissant que les
            innovations deviennent des solutions pratiques adaptées aux défis
            quotidiens et missions de la Marine Nationale.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;
