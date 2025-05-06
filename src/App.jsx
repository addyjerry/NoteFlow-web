import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Organizations from "./components/Organizations";
import ToolSection from "./components/ToolSection";
import QuestionSection from "./components/QuestionSection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <ThemeProvider>
      {/* <div
        className={`md:place-self-center font-Poppins lg:px-18 py-12  w-full  overflow-x-hidden dark:bg-gradient-to-b from-[#011f1f] to-[#001414] bg-cyan-400`}
      > */}
      <MainLayout>
        <Header />
        <HeroSection />
        <Organizations />
        <ToolSection />
        <QuestionSection />
        <Reviews />
        <Footer />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
