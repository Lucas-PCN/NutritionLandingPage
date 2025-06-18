import React from 'react';
import legumes from '../assets/backgrounds/legumes.png';
import sorrisoMobile from '../assets/backgrounds/sorrisoMobile.png';
import sorrisoDesktop from '../assets/backgrounds/sorrisoDesktop.png';
import ondaMobile from '../assets/backgrounds/ondaMobile.png';

const Home = () => {
  return (
    <section className="w-full min-h-screen pt-20">
      {/* MOBILE */}
      <div className="w-full h-[calc(100vh-80px)] lg:hidden flex flex-col">
        {/* Primeira metade */}
        <div className="bg-[#E3E2E5] h-1/2 w-full flex items-center justify-center text-center" style={{ backgroundImage: `url(${legumes})` }}>
          <div className="flex flex-col items-center gap-7">
            <p className="text-sm text-black">CRN-9 33640</p>

            <h1 className="text-xl font-normal text-black leading-snug">
              Nutricionista <br />
              <span className="font-bold">Bianca Pereira</span>
            </h1>

            <p className="text-sm text-black leading-snug">
              Nutrição esportiva,<br />emagrecimento e saúde
            </p>

            <div>
              <a
                href="https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-jet text-white rounded-full px-6 py-2 text-[15px] hover:bg-beige hover:text-black transition"
              >
                Agende sua consulta
              </a>
            </div>
          </div>
        </div>

        {/* Segunda metade */}
        <div className="h-1/2 w-full bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${sorrisoMobile})` }}>
          <img src={ondaMobile} alt="Onda" className="absolute bottom-0 left-0 w-full object-contain pointer-events-none" />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="w-full h-[calc(100vh-80px)] hidden lg:flex relative bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${sorrisoDesktop})` }}>
        <div className="w-1/2 flex items-center justify-center absolut left-0">
          <div className="flex flex-col items-center text-center gap-7 rounded-xl p-5">
            <p className="text-[22px] text-white">CRN-9 33640</p>

            <h1 className="text-[52px] font-light text-white leading-snug">
              Nutricionista <br />
              <span className="font-bold">Bianca Pereira</span>
            </h1>

            <p className="text-[22px] text-white">
              Nutrição esportiva,<br />emagrecimento e saúde
            </p>

            <div>
              <a
                href="https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-jet text-white rounded-full px-6 py-2 text-[15px] hover:bg-beige hover:text-black transition"
              >
                Agende sua consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;