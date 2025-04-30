import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Organizations from "./components/Organizations";
import ToolSection from "./components/ToolSection";
import QuestionSection from "./components/QuestionSection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div
        className={`md:place-self-center lg:px-18 py-12 ml-0 lg:ml-0 md:ml-0 w-full overflow-x-hidden dark:bg-gradient-to-b from-[#011f1f] to-[#001414] bg-green-300 `}
      >
        <Header />
        <HeroSection />
        <Organizations />
        <ToolSection />
        <QuestionSection />
        <Reviews />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
