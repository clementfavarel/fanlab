import React from "react";
import { container } from "./variables";
import video from "../images/questioninnovation.mp4";

const Video = () => {
  return (
    <>
      <section className={`${container}`}>
        <video
          controls
          className="w-full my-10 video rounded-lg relative w-1/2"
        >
          <source src={video} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default Video;
