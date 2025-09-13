import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Ratings from "./Ratings";
import CoachProfile from "./CoachProfile";
import Achievements from "./Achievements";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Ratings />
      <CoachProfile />
      <Achievements />
      <Footer />
    </div>
  );
};

export default Home;
