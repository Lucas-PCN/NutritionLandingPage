import instagramIcon from '../../../assets/icons/Instagram_Logo_bolder.png';
import whatsappIcon from '../../../assets/icons/WhatsApp_logo.png';

const AboutMeDesktopCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ";
  const INSTA_URL = "https://www.instagram.com/biancapereiranutricionista?igsh=cno4ZXV4b2h3YmYw";

  return (
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
  );
};

export default AboutMeDesktopCard;