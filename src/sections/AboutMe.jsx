import React from "react";
import instagramIcon from '../assets/icons/Instagram_Logo_bolder.png';
import whatsappIcon from '../assets/icons/WhatsApp_logo.png';
import quemSouEu from '../assets/others/quemSouEu.png';

const AboutMe = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ";
  const INSTA_URL = "https://www.instagram.com/biancapereiranutricionista?igsh=cno4ZXV4b2h3YmYw";

  return (
    <section className="w-full h-full flex items-center justify-center">
      {/* MOBILE */}
      <div className="py-[80px] flex flex-col gap-[48px] items-center justify-center md:flex-row lg:hidden">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col">
            <p className="text-[16px]">Olá! Eu sou a</p>
            <h1 className="text-[30px] font-light text-moss-green">
              Nutricionista <br />
              <span className="font-bold">Bianca Pereira</span>
            </h1>
          </div>

          <p className="text-[14px] w-[250px]">
            Formada pela Universidade Federal de Uberlândia e pós graduanda em Nutrição esportiva e estética. Especialista em <span className="font-bold">estética corporal e emagrecimento</span>, já ajudei diversas pessoas a chegarem no corpo que tanto sonham, de maneira leve e equilibrada com resultados consistentes e duradouros.
          </p>

          <div className="flex items-center gap-7">
            <a href={INSTA_URL} target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <img src={quemSouEu} alt="Nutricionista Bianca" className="w-[220px] h-[270px]" />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:w-full lg:h-[720px] lg:relative lg:flex lg:items-center lg:justify-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[136px] w-[1px] bg-jet"></div>
        <div className="absolute w-1/2 left-0 flex justify-end pr-[100px]">
          <div className="flex flex-col gap-[30px] items-end">
            <div className="flex flex-col text-right">
              <p className="text-[20px]">Olá! Eu sou a</p>
              <h1 className="font-light text-moss-green text-[45px]">
                Nutricionista <br />
                <span className="font-bold">Bianca Pereira</span>
              </h1>
            </div>

            <p className="text-[16px] w-[430px] text-right">
              Formada pela Universidade Federal de Uberlândia e pós graduanda em Nutrição esportiva e estética. Especialista em <span className="font-bold">estética corporal e emagrecimento</span>, já ajudei diversas pessoas a chegarem no corpo que tanto sonham, de maneira leve e equilibrada com resultados consistentes e duradouros.
            </p>

            <div className="flex items-center gap-7">
              <a href={INSTA_URL} target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute w-1/2 right-0 flex items-start pl-[100px]">
          <img src={quemSouEu} alt="Nutricionista Bianca" className="w-[400px] h-[491px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;