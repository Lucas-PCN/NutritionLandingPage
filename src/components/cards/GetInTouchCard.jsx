const GetInTouchCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ";

  return (
    <div className="relative w-[334px] h-[435px] lg:w-[653px] lg:h-[348px]">
        <div className="w-[334px] h-[407px] bg-beige/80 absolute top-0 rounded-[20px] lg:w-[653px] lg:h-[319.5px]">
          <div className="absolute top-[45px] left-[46px] w-[243px] text-center flex flex-col gap-[21px] lg:w-[528px] lg:left-[63px] lg:top-[34px] lg:gap-[26px]">
            <h1 className="text-[30px] text-moss-green font-bold leading-[36px] lg:text-[44px] lg:leading-[45px]">
              Alcance seus objetivos com leveza e prazer
            </h1>
            <p className="text-[14px] leading-[17px] lg:text-[16px] lg:leading-[20px]">
              Descubra como a nutrição estratégica pode transformar seu corpo, sua autoestima e sua relação com a comida.
            </p>
            <p className="text-[14px] leading-[17px] lg:text-[16px] lg:leading-[20px]">
              Juntas, vamos construir um caminho mais leve, sem dietas restritivas — só escolhas conscientes e duradouras.
            </p>
          </div>
        </div>
        <div className="absolute bottom-[19.5px] left-[45px] lg:left-[204px]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-moss-green to-mindaro rounded-full px-[37px] py-[19.5px] text-sm text-black hover:from-jet hover:to-jet hover:text-white transition"
          >
            Começar minha jornada
          </a>
        </div>
      </div>
  );
};

export default GetInTouchCard;