import React from "react";
import mathis from "../images/team/mathis.jpg";
import gregoire from "../images/team/gregoire.jpg";
import romane from "../images/team/romane.jpg";
import laetitia from "../images/team/laetitia.jpg";
import alexandre from "../images/team/alexandre.jpg";
import matthieu from "../images/team/matthieu.jpg";

import { container } from "./variables";
import "swiper/css";
import "swiper/css/navigation";
const teamMembers = [
  { name: "Laetitia ", role: "OSC - Chef du FANLab", image: laetitia },
  { name: "Grégoire ", role: "VOA, chargé de projet", image: gregoire },
  { name: "Romane ", role: "Graphiste, Motion Design & 3D", image: romane },
  { name: "Alexandre ", role: "Développeur", image: alexandre },
  {
    name: "Mathis",
    role: "UX/UI Designer & Développeur",
    image: mathis,
  },
  {
    name: "Matthieu",
    role: "Développeur",
    image: matthieu,
  },
];

const Whoweare = () => {
  return (
    <section id="whoweare" className={`py-10 ${container}`}>
      <h2 className="h2-style text-center font-bold mb-20">
        QUI SOMMES NOUS ?
      </h2>
      <div className="grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="overflow-hidden relative w-full mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6"
          >
            <img
              className="absolute -left-6 w-24 h-24 rounded-full  object-cover shadow-lg"
              src={member.image}
              alt={member.name}
            />
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-slate-900 text-sm font-medium">
                {member.name}
              </strong>
              <span className="text-slate-500 text-sm font-medium">
                {member.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whoweare;
