import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import RecyclingSection from "./RecyclingSection";
import Header from "../../components/Navs/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <HowItWorks />
      <RecyclingSection />
    </>
  );
};

export default Home;
