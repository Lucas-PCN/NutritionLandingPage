import React from 'react';
import legumes from '../assets/backgrounds/legumes.png';
import sorrisoMobile from '../assets/backgrounds/sorrisoMobile.png';
import sorrisoDesktop from '../assets/backgrounds/sorrisoDesktop.png';
import ondaMobile from '../assets/backgrounds/ondaMobile.png';
import HomeMobileCard from '../components/cards/mobile/HomeMobileCard';
import HomeDesktopCard from '../components/cards/desktop/HomeDesktopCard';
// import natureza from '../assets/backgrounds/natureza.jpg';
// import ondaDesktop from '../assets/backgrounds/ondaDesktop.png';

const Home = () => {
  return (
    <section className="w-full min-h-screen pt-20">
      {/* MOBILE */}
      <div className="w-full h-[calc(100vh-80px)] lg:hidden flex flex-col">
        {/* Primeira metade */}
        <div className="bg-[#E3E2E5] h-1/2 w-full flex items-center justify-center text-center" style={{ backgroundImage: `url(${legumes})` }}>
          <HomeMobileCard />
        </div>

        {/* Segunda metade */}
        <div className="h-1/2 w-full bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${sorrisoMobile})` }}>
          <img src={ondaMobile} alt="Onda" className="absolute bottom-0 left-0 w-full object-contain pointer-events-none" />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="w-full h-[calc(100vh-80px)] hidden lg:flex relative bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${sorrisoDesktop})` }}>
        <div className="w-1/2 flex items-center justify-center absolut left-0">
          <HomeDesktopCard />
        </div>
        {/* <img src={ondaDesktop} alt="Onda" className="absolute bottom-0 left-0 w-full object-contain pointer-events-none" /> */}
      </div>
    </section>
  );
};

export default Home;