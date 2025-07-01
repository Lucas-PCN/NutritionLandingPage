const TalkToMeDesktopCard = () => {
    const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ";
  
    return (
      <div className="absolute w-1/2 right-0 flex items-start pl-[210px]">
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
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-moss-green to-mindaro rounded-full px-[37px] py-[19.5px] text-sm text-black hover:from-jet hover:to-jet hover:text-white transition"
            >
              Falar com a Nutri!
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default TalkToMeDesktopCard;