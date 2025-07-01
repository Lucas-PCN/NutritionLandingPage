const TalkToMeMobileCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ";

  return (
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
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-moss-green to-mindaro rounded-full px-[37px] py-[19.5px] text-sm text-black hover:from-jet hover:to-jet hover:text-white transition"
        >
          Falar com a Nutri!
        </a>
      </div>
    </div>
  );
};

export default TalkToMeMobileCard;