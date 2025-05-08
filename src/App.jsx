import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Organizations from "./components/Organizations";
import ToolSection from "./components/ToolSection";
import QuestionSection from "./components/QuestionSection";
import Reviews from "./components/Reviews";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Header />
        <ThemeToggle />
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
