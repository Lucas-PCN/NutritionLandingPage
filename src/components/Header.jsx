import React, { useState } from 'react';
import menuIcon from '../assets/icons/ic_round-menu.png';
import whatsappIcon from '../assets/icons/WhatsApp_logo.png';
import logoNutri from '../assets/icons/Logo_Nutri.png';
import instagramIcon from '../assets/icons/Instagram_Logo_bolder.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-off-white shadow-lg">
      <div className="flex items-center justify-between w-full px-7 h-20 lg:hidden">
        {/* Botão menu */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={menuIcon} alt="Menu" className="w-5 h-5" />
        </button>

        {/* Logo */}
        <img src={logoNutri} alt="Logo" className="h-12" />

        {/* Botão WhatsApp */}
        <a
          href="https://github.com/Lucas-PCN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
        </a>
      </div>

      {/* Menu Dropdown */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-44 h-screen bg-off-white shadow-lg py-4 px-7">
          <ul className="flex flex-col space-y-4 text-black">
            <li><a href="#sobre">Sobre mim</a></li>
            <li><a href="#servicos">Meus Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      )}

      {/* DESKTOP */}
      <div className="hidden lg:flex items-center justify-between h-20 px-12">
        {/* Redes sociais */}
        <div className="flex items-center gap-7">
          <a href="https://github.com/Lucas-PCN" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-4 h-4" />
          </a>
          <a href="https://github.com/Lucas-PCN" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
          </a>
        </div>

        {/* Logo + Navegação */}
        <div className="flex items-center gap-12">
          <span className="text-sm">Bianca Pereira Nutricionista</span>
          <img src={logoNutri} alt="Logo" className="h-12" />
          <nav className="flex gap-8 text-black text-sm">
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>

        {/* Botão de agendamento */}
        <div>
          <a
            href="https://github.com/Lucas-PCN"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black rounded-full px-6 py-2 text-sm hover:bg-jet hover:text-white transition"
          >
            Agende sua consulta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;