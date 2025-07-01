import React from "react";
import quemSouEu from '../assets/others/quemSouEu.png';
import AboutMeDesktopCard from "../components/cards/desktop/AboutMeDesktopCard";
import AboutMeMobileCard from "../components/cards/mobile/AboutMeMobileCard";

const AboutMe = () => {
  return (
    <section id="sobre" className="w-full h-full flex items-center justify-center">
      {/* MOBILE */}
      <div className="pb-[80px] pt-[100px] flex flex-col gap-[48px] items-center justify-center md:flex-row lg:hidden">
        <AboutMeMobileCard />
        <img src={quemSouEu} alt="Nutricionista Bianca" className="w-[220px] h-[270px]" />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:w-full lg:h-[720px] lg:relative lg:flex lg:items-center lg:justify-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[136px] w-[1px] bg-jet"></div>
        <div className="absolute w-1/2 left-0 flex justify-end pr-[100px]">
          <AboutMeDesktopCard />
        </div>
        <div className="absolute w-1/2 right-0 flex items-start pl-[100px]">
          <img src={quemSouEu} alt="Nutricionista Bianca" className="w-[400px] h-[491px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;