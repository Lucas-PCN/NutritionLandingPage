import FaqCard from '../components/cards/FaqCard';

const Faq = () => {
  return (
    <section className="bg-seasalt w-full flex flex-col justify-center items-center py-20 gap-[80px]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-[20px] lg:text-[42px]">
          Dúvidas frequentes
        </h1>
        <div className="w-[80px] h-[1px] bg-jet lg:w-[160px]"></div>
      </div>

      <div className="flex flex-col items-start justify-center gap-[20px] lg:gap-[80px] lg:flex-row">
        <div className="w-[350px] flex flex-col gap-[20px] items-center justify-center lg:w-[400px]">
          <FaqCard
            question="Como marcar uma consulta?"
            answer="Agende hoje mesmo entrando em contato pelo whatsapp."
            customWidth="w-[238px] lg:w-[280px]"
          />
          <FaqCard
            question="Como funciona o retorno?"
            answer="O retorno está incluso na consulta. Nele iremos refazer a avaliação física para avaliar os resultados obtidos, conversar sobre o processo e realizar os devidos ajustes na dieta se necessário."
            customWidth="w-[276px] lg:w-[280px]"
          />
          <FaqCard
            question="Qual o horário de funcionamento?"
            answer="Segunda à sexta das 8:00 às 22:00; Sábado das 8:00 ao 12:00; Domingo: fechado. Os atendimentos também podem ser online, entre em contato."
            customWidth="w-[276px] lg:w-[320px]"
          />
        </div>

        <div className="w-[350px] flex flex-col gap-[20px] items-center justify-center lg:w-[400px]">
          <FaqCard
            question="A Dra. Bianca aceita convênio?"
            answer="A Dra. Bianca trabalha com a Rede Valorize e aceita o convênio do Plano Pirâmide. Em outras situações oferecemos auxílio para o processo de reembolso através do recibo de atendimento."
            customWidth="w-[240px] lg:w-[300px]"
          />
          <FaqCard
            question="Qual o endereço de atendimento?"
            answer="Espaço 44, Unidade 02: Rua Bocaiúva, 434, Morada da Colina. *Em frente ao Quero Carne e ao lado da Francisco Galassi."
            customWidth="w-[262px] lg:w-[320px]"
          />
          <FaqCard
            question="Quais os métodos de pagamento?"
            answer="Aceitamos pix, cartão de crédito, cartão de débito e dinheiro em espécie."
            customWidth="w-[276px] lg:w-[320px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;