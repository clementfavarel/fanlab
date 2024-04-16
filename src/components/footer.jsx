import React from "react";
import fanlab from "../images/fanlab.png";
import marinenationale from "../images/marine_nationale.png";
import fan from "../images/FAN.png";
import fanlabbis from "../images/FANLAB_ROND_transparent_blanc.png";
import fps from "../images/logoFPS.png";

const footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 mr-6 md:mb-0">
              <span className="flex items-center">
                <img
                  src={fanlab}
                  className="h-24 me-3 object-contain"
                  alt="FlowBite Logo"
                />
              </span>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  LOCALISATION
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>BCRM Toulon BP 760</li>
                  <li>Toulon, Cedex 0983800</li>
                  <li>Ilôt Castigneau - FPS Toulon</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  nous contacter
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <span> laetitia.collodet@intradef.gouv.fr</span>
                  </li>
                  <li className="mb-4">
                    <span>
                      alfan-fanlab-toulon.accueil.fct@intradef.gouv.fr
                    </span>
                  </li>
                  <li className="mb-4">
                    <span>OSC COLLODET : 864 73 23 577 - 06 86 92 47 75</span>
                  </li>
                  <li>
                    <span>FANLAB : 864 73 23 522 - 04 22 42 35 22</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200  sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex  flex-col sm:flex-row justify-center items-center w-full mt-4">
            <div className="flex flex-wrap justify-between w-3/4 mt-4 sm:mt-0">
              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white mb-4 sm:mb-0">
                <img
                  className="h-20 sm:h-28"
                  src={marinenationale}
                  alt="marine nationale"
                />
              </span>

              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white mb-4 sm:mb-0">
                <img
                  className="h-20 sm:h-28"
                  src={fan}
                  alt="Force d'Action Navale"
                />
              </span>

              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white mb-4 sm:mb-0">
                <img className="h-20 sm:h-28" src={fanlabbis} alt="Fanlab" />
              </span>

              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <img
                  className="h-20 sm:h-28"
                  src={fps}
                  alt="flottille de perfectionnement du surfacier"
                />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
