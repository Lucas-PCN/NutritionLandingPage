import marmitas from '../assets/others/marmitas.png';
import retorno from '../assets/others/retorno.png';
import notebook from '../assets/others/notebook.png';
import bioimpedancia from '../assets/others/bioimpedancia.png';
import avaliacaoFisica from '../assets/others/avaliacaoFisica.png';

const services = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-20 gap-[75px] lg:gap-[80px]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-[20px] lg:text-[42px]">
          Meus Serviços
        </h1>
        <div className="w-[80px] h-[1px] bg-jet lg:w-[160px]"></div>
      </div>

      <div className="flex flex-col items-start justify-center gap-[75px] lg:flex-row">
        <div className="flex flex-col items-center gap-[28px]">
          <img src={marmitas} alt="marmitas saudáveis" className="w-[280px] h-[142px] lg:w-[362px] lg:h-[183px]" />
          <h2 className="text-[16px] font-bold lg:text-[20px]">Plano alimentar individualizado</h2>
          <p className="text-[14px] w-[268px] text-center lg:w-[314px]">
            Conhecerei você e sua rotina para confeccionar um plano alimentar com o que você gosta, nas quantidades ideais para o seu objetivo e que se encaixe na sua rotina.
          </p>
        </div>

        <div className="flex flex-col items-center gap-[28px]">
          <img src={retorno} alt="retorno" className="w-[280px] h-[142px] lg:w-[362px] lg:h-[183px]" />
          <h2 className="text-[16px] font-bold lg:text-[20px]">Retorno incluso</h2>
          <p className="text-[14px] w-[280px] text-center lg:w-[362px]">
            Na minha consulta, seu retorno está incluso. Nele iremos realizar uma segunda avaliação física para analisarmos os resultados obtidos com o acompanhamento, conversaremos sobre como foi todo o processo e faremos o reajuste da sua dieta.
          </p>
        </div>

        <div className="flex flex-col items-center gap-[28px]">
          <img src={notebook} alt="notebook" className="w-[280px] h-[142px] lg:w-[362px] lg:h-[183px]" />
          <h2 className="text-[16px] font-bold lg:text-[20px]">Suporte online contínuo</h2>
          <p className="text-[14px] w-[285px] text-center lg:w-[362px]">
            Suporte para dúvidas e ajustes na dieta quando necessários. Além de feedbacks semanais de como está sendo a adesão ao planejamento alimentar.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-[75px] lg:flex-row">
        <div className="flex flex-col items-center gap-[28px]">
          <img src={bioimpedancia} alt="bioimpedância elétrica" className="w-[280px] h-[142px] lg:w-[362px] lg:h-[183px]" />
          <h2 className="text-[16px] font-bold lg:text-[20px]">Bioimpedância elétrica</h2>
          <p className="text-[14px] w-[260px] text-center lg:w-[308px]">
            Ofereço o exame de Bioimpedância Elétrica para uma análise completa da composição corporal. Com ele, é possível medir de forma precisa a gordura corporal total, a massa magra, a massa muscular, a gordura visceral e a taxa metabólica basal.
          </p>
        </div>

        <div className="flex flex-col items-center gap-[28px]">
          <img src={avaliacaoFisica} alt="avaliação física" className="w-[280px] h-[142px] lg:w-[362px] lg:h-[183px]" />
          <h2 className="text-[16px] font-bold lg:text-[20px]">Avaliação física completa</h2>
          <p className="text-[14px] w-[280px] text-center lg:w-[362px]">
            Durante a avaliação física, meço sua altura, circunferências e dobras cutâneas com equipamentos adequados para entender melhor o seu corpo e acompanhar sua evolução.
          </p>
        </div>
      </div>
    </section>

  );
};

export default services;