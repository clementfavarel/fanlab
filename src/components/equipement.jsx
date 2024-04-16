import React from "react";
import { container, sectionTitleClass } from "./variables";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../images/ultimaker.jpg";
import img2 from "../images/casqueVR.png";
import img3 from "../images/hololens.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Equipement = () => {
  return (
    <>
      <section id="equipement" className="bg-gray-900  py-10">
        <div className={`${container}`}>
          <h2 className={`text-white ${sectionTitleClass}`}>ÉQUIPEMENT</h2>
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
            className="mySwiper rounded-lg"
          >
            <SwiperSlide>
              <img src={img1} alt="img carousel" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="img carousel" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="img carousel" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Equipement;
