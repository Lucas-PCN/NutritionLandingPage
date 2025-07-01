import marmitas from '../assets/others/marmitas.png';
import retorno from '../assets/others/retorno.png';
import notebook from '../assets/others/notebook.png';
import bioimpedancia from '../assets/others/bioimpedancia.png';
import avaliacaoFisica from '../assets/others/avaliacaoFisica.png';

import ServiceCard from '../components/cards/ServiceCard';

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
        <ServiceCard
          title="Plano alimentar individualizado"
          description="Conhecerei você e sua rotina para confeccionar um plano alimentar com o que você gosta, nas quantidades ideais para o seu objetivo e que se encaixe na sua rotina."
          image={marmitas}
          customWidth="w-[268px] lg:w-[314px]"
        />

        <ServiceCard
          title="Retorno incluso"
          description="Na minha consulta, seu retorno está incluso. Nele iremos realizar uma segunda avaliação física para analisarmos os resultados obtidos com o acompanhamento, conversaremos sobre como foi todo o processo e faremos o reajuste da sua dieta."
          image={retorno}
          customWidth="w-[280px] lg:w-[362px]"
        />

        <ServiceCard
          title="Suporte online contínuo"
          description="Suporte para dúvidas e ajustes na dieta quando necessários. Além de feedbacks semanais de como está sendo a adesão ao planejamento alimentar."
          image={notebook}
          customWidth="w-[285px] lg:w-[362px]"
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-[75px] lg:flex-row">
        <ServiceCard
          title="Bioimpedância elétricao"
          description="Ofereço o exame de Bioimpedância Elétrica para uma análise completa da composição corporal. Com ele, é possível medir de forma precisa a gordura corporal total, a massa magra, a massa muscular, a gordura visceral e a taxa metabólica basal."
          image={bioimpedancia}
          customWidth="w-[260px] lg:w-[308px]"
        />

        <ServiceCard
          title="Avaliação física completa"
          description="Durante a avaliação física, meço sua altura, circunferências e dobras cutâneas com equipamentos adequados para entender melhor o seu corpo e acompanhar sua evolução."
          image={avaliacaoFisica}
          customWidth="w-[280px] lg:w-[362px]"
        />
      </div>
    </section>
  );
};

export default services;