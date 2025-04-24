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
    <div className=" md:place-self-center lg:px-18 py-12 ml-0 lg:ml-0 md:ml-0 w-full overflow-x-hidden">
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
