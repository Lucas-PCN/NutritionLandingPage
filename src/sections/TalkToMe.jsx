import marmitasSaudaveis from '../assets/others/marmitasSaudaveis.png';
import pesinho from '../assets/icons/pesinho.png';
import balanca from '../assets/icons/balanca.png';
import maca from '../assets/icons/maca.png';
import garfinho from '../assets/icons/garfinho.png';
import check from '../assets/icons/check.png';
import instagramIcon from '../assets/icons/Instagram_Logo_bolder.png';
import whatsappIcon from '../assets/icons/WhatsApp_logo.png';

const TalkToMe = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ";
  const INSTA_URL = "https://www.instagram.com/biancapereiranutricionista?igsh=cno4ZXV4b2h3YmYw";

  return (
    <section className="w-full h-full flex items-center justify-center">
      {/* MOBILE */}
      <div className="py-[80px] flex flex-col gap-[131px] items-center justify-center md:flex-row lg:hidden">
        <div className="flex flex-col gap-[30px] items-start w-[298px]">
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[25px] text-moss-green">
              Obtenha resultados
            </h1>
            <img src={check} alt="check icon" className="w-[40px] h-[40px]" />
          </div>

          <div className="flex gap-[20px] items-center">
            <img src={pesinho} alt="ícone de pesinho" className="w-[30px] h-[30px]" />
            <p className="text-[16px]">
              Ganhe <span className="font-bold">músculos</span>
            </p>
          </div>

          <div className="flex gap-[20px] items-center">
            <img src={balanca} alt="ícone de pesinho" className="w-[30px] h-[30px]" />
            <p className="text-[16px]">
              Recupere sua <span className="font-bold">autoestima</span>
            </p>
          </div>

          <div className="flex gap-[20px] items-center">
            <img src={maca} alt="ícone de pesinho" className="w-[30px] h-[30px]" />
            <p className="text-[16px]">
              Queime <span className="font-bold">gordeura</span>
            </p>
          </div>

          <div className="flex gap-[20px] items-center">
            <img src={garfinho} alt="ícone de pesinho" className="w-[30px] h-[30px]" />
            <p className="text-[16px]">
              Sinta-se <span className="font-bold">bem</span>
            </p>
          </div>
        </div>

        <img src={marmitasSaudaveis} className="h-[375px] w-[250px]" />

        <div className="relative w-[334px] h-[385px]">
          <div className="w-[334px] h-[357px] bg-beige/80 absolute top-0 rounded-[20px]">
            <div className="absolute top-[45px] left-[46px] w-[243px] text-center flex flex-col gap-[21px]">
              <h1 className="text-[30px] text-moss-green font-bold leading-[36px]">
                Planejamento exclusivo
              </h1>
              <p className="text-[14px] leading-[17px]">
                Transforme seus hábitos com leveza, autonomia e equilíbrio — tonifique seu corpo sem dietas restritivas ou sofrimento.
              </p>
              <p className="text-[14px] leading-[17px]">
                Sinta prazer ao fazer escolhas conscientes e recupere o controle sobre sua alimentação.
              </p>
            </div>
          </div>
          <div className="absolute bottom-[19.5px] left-[67.75px]">
            <a
              href="https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-moss-green to-mindaro rounded-full px-[37px] py-[19.5px] text-sm text-black hover:from-jet hover:to-jet hover:text-white transition"
            >
              Falar com a Nutri!
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:w-full lg:h-[668px] lg:relative lg:flex lg:items-center lg:justify-center">
        <img src={marmitasSaudaveis} className="absolute left-1/2 transform -translate-x-1/2 h-[375px] w-[250px]" />
        <div className="absolute w-1/2 left-0 flex justify-end pr-[197px]">
          <div className="flex flex-col gap-[38px] items-start w-[505px]">
            <div className="flex items-center gap-[20px]">
              <h1 className="text-[44px] text-moss-green">
                Obtenha resultados
              </h1>
              <img src={check} alt="check icon" className="w-[40px] h-[40px]" />
            </div>

            <div className="flex gap-[30px] items-center">
              <img src={pesinho} alt="ícone de pesinho" className="w-[40px] h-[40px]" />
              <p className="text-[20px]">
                Ganhe <span className="font-bold">músculos</span>
              </p>
            </div>

            <div className="flex gap-[30px] items-center">
              <img src={balanca} alt="ícone de pesinho" className="w-[40px] h-[40px]" />
              <p className="text-[20px]">
                Recupere sua <span className="font-bold">autoestima</span>
              </p>
            </div>

            <div className="flex gap-[30px] items-center">
              <img src={maca} alt="ícone de pesinho" className="w-[40px] h-[40px]" />
              <p className="text-[20px]">
                Queime <span className="font-bold">gordeura</span>
              </p>
            </div>

            <div className="flex gap-[30px] items-center">
              <img src={garfinho} alt="ícone de pesinho" className="w-[40px] h-[40px]" />
              <p className="text-[20px]">
                Sinta-se <span className="font-bold">bem</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-1/2 right-0 flex items-start pl-[246px]">
          <div className="relative w-[408px] h-[376px]">
            <div className="bg-beige/80 absolute top-0 rounded-[20px] w-[408px] h-[356px]">
              <div className="absolute text-center flex flex-col w-[356px] left-[26px] top-[38px] gap-[26px]">
                <h1 className="text-moss-green font-bold text-[44px] leading-[45px]">
                  Planejamento exclusivo
                </h1>
                <p className="text-[16px] leading-[20px]">
                  Transforme seus hábitos com leveza, autonomia e equilíbrio — tonifique seu corpo sem dietas restritivas ou sofrimento.
                </p>
                <p className="text-[16px] leading-[20px]">
                  Sinta prazer ao fazer escolhas conscientes e recupere o controle sobre sua alimentação.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[10px] left-[104.75px]">
              <a
                href="https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-moss-green to-mindaro rounded-full px-[37px] py-[19.5px] text-sm text-black hover:from-jet hover:to-jet hover:text-white transition"
              >
                Falar com a Nutri!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToMe;