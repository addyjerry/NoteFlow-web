import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Organizations from "./components/Organizations";
import ToolSection from "./components/ToolSection";

function App() {
  return (
    <div className="justify-center px-18 py-12">
      <Header />
      <HeroSection />
      <Organizations />
      <ToolSection />
    </div>
  );
}

export default App;
