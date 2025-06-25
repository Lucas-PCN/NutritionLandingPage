import React, { useState } from 'react';
import menuIcon from '../../assets/icons/ic_round-menu.png';
import whatsappIcon from '../../assets/icons/WhatsApp_logo.png';
import logoNutri from '../../assets/icons/Logo_Nutri.png';
import instagramIcon from '../../assets/icons/Instagram_Logo_bolder.png';
import HeaderButton from '../shared/HeaderButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ";
  const INSTA_URL = "https://www.instagram.com/biancapereiranutricionista?igsh=cno4ZXV4b2h3YmYw";

  return (
    <header className="fixed top-0 z-50 w-full bg-off-white shadow-lg">
      {/* MOBILE */}
      <div className="flex items-center justify-between px-7 h-20 lg:hidden">
        {/* Botão menu */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={menuIcon} alt="Menu" className="w-5 h-5" />
        </button>

        {/* Logo */}
        <img src={logoNutri} alt="Logo" className="h-12" />

        {/* Botão WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
        </a>
      </div>

      {/* Menu Dropdown */}
      {isOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-44 h-screen bg-off-white shadow-lg py-4 px-7">
          <ul className="flex flex-col space-y-4 text-black">
            <li><a href="#sobre">Sobre mim</a></li>
            <li><a href="#servicos">Meus Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      )}

      {/* DESKTOP */}
      <div className="hidden lg:flex relative items-center h-20 px-7">
        {/* Redes sociais */}
        <div className="flex items-center gap-7">
          <a href={INSTA_URL} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
          </a>
        </div>

        {/* Logo + Navegação */}
        <div className="absolute left-48/100 transform -translate-x-48/100 flex items-center gap-12">
          <a href="#sobre" className="text-sm hover:underline">Bianca Pereira Nutricionista</a>
          <img src={logoNutri} alt="Logo" className="h-12" />
          <nav className="flex gap-8 text-black text-sm">
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>

        {/* Botão de agendamento */}
        <HeaderButton />
      </div>
    </header>
  );
};

export default Header;