import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import RecyclingSection from "./RecyclingSection";
import Header from "../../components/Navs/Header";
import StepCarousel from "./StepCarousel";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <HowItWorks />
      <StepCarousel />
      <RecyclingSection />
    </>
  );
};

export default Home;
