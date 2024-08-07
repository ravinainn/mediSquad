import React from "react";
import Hero from "../components/Home/Hero";
import Footer from "../components/Footer";
import ActivitySection from "../components/Home/ActivitySection";

const Home = () => {
  return (
    <div>
      <h1>MediSquad</h1>
      <Hero />
      <ActivitySection />
      <Footer />
    </div>
  );
};

export default Home;
