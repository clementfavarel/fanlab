import React, { useState, useEffect } from "react";

import hero from "../images/hero.png";
import logo from "../images/fanlab.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateMenuVisibility = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", updateMenuVisibility);
    updateMenuVisibility();
    return () => {
      window.removeEventListener("resize", updateMenuVisibility);
    };
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-[#101012] relative to-[#090820]">
        <header
          className={`fixed inset-x-0 top-0 z-10 w-full ${
            isScrolled
              ? "bg-[#101012] shadow-lg transition-all duration-300"
              : "bg-transparent"
          }`}
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#home">
                  <img className="w-auto h-14" src={logo} alt="Logo" />
                </a>
              </div>
              <div
                className={`${
                  isMenuOpen ? "flex" : "hidden"
                } flex-col lg:flex-row items-center lg:space-x-10 bg-gray-800 lg:bg-transparent p-4 lg:p-0 absolute inset-x-0 top-full lg:static lg:mt-0 z-50 transition-all duration-300 ease-out shadow-lg rounded-b-lg`}
              >
                <a
                  href="#presentation"
                  className="text-base text-white transition-colors duration-200 hover:text-opacity-80 py-2"
                >
                  Présentation
                </a>
                <a
                  href="#projets"
                  className="text-base text-white transition-colors duration-200 hover:text-opacity-80 py-2"
                >
                  Nos projets
                </a>
                <a
                  href="#our-equipement"
                  className="text-base text-white transition-colors duration-200 hover:text-opacity-80 py-2"
                >
                  Équipement
                </a>
                <a
                  href="#modelisation"
                  className="text-base text-white transition-colors duration-200 hover:text-opacity-80 py-2"
                >
                  Modélisations
                </a>
                <a
                  href="#whoweare"
                  className="text-base text-white transition-colors duration-200 hover:text-opacity-80 py-2"
                >
                  L'équipe
                </a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <section
          id="home"
          className="relative lg:min-h-[100vh] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24"
        >
          <div className="absolute inset-x-0 bottom-0 hidden lg:flex">
            <img className="hidden w-full lg:block" src={hero} alt="" />
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative ">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="text-4xl font-bold sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  Découvrez le FANLab
                </span>
              </h1>
              <p className="mt-5 text-base text-white sm:text-xl">
                Laboratoire d’innovation de la Force d'Action Navale qui vous
                accompagne dans tous vos projets.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
