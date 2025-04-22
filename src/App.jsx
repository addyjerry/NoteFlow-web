import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Organizations from "./components/Organizations";
import ToolSection from "./components/ToolSection";
import QuestionSection from "./components/QuestionSection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="justify-center lg:px-18 py-12 ml-190 lg:ml-0 md:ml-90">
      <Header />
      <HeroSection />
      <Organizations />
      <ToolSection />
      <QuestionSection />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
