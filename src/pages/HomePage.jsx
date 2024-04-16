import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import Video from "../components/video";
import Ultimaker from "../components/ultimaker";
import Whoweare from "../components/whoweare";
import Itproject from "../components/it-project";
import Modelisation from "../components/modelisation";
import Footer from "../components/footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <Body />
      <Video />
      <Itproject />
      <Ultimaker />
      <Modelisation />
      <Whoweare />
      <Footer />
    </>
  );
};

export default HomePage;
