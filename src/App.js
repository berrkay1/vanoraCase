import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SliderSection from "./components/SliderSection";
import YoutubeSelection from "./components/YoutubeSelection";
import ResNavbar from "./components/ResNavbar";
import { useWindowWidth } from "@react-hook/window-size";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();



  return (
    <div className="relative">
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Hero />
      <SliderSection />
      <YoutubeSelection />
      {isOpen && windowWidth < 1024 ? <ResNavbar /> : null}
    </div>
  );
}

export default App;
