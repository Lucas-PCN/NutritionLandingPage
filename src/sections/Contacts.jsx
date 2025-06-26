import chat from '../assets/icons/chat.png';
import email from '../assets/icons/email.png';
import locationIcon from '../assets/icons/locationIcon.png';

const Contacts = () => {
  return (
    <section className="w-full h-full flex items-center justify-center bg-white">
      {/* MOBILE */}
      <div className="py-[75px] flex flex-col gap-[75px] items-center justify-center md:flex-row lg:hidden">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-[20px]">
            Entre em contato
          </h1>
          <div className="w-[80px] h-[1px] bg-jet"></div>
        </div>

        <div className="flex flex-col gap-[20px] items-center">
          <img src={chat} alt="Chat icon" className="w-[50px] h-[50px]" />
          <p className="text-[16px] text-moss-green">
            Mande uma mensagem
          </p>
          <p className="text-[14px]">
            (34) 99200-3533
          </p>
        </div>

        <div className="flex flex-col gap-[20px] items-center">
          <img src={email} alt="Chat icon" className="w-[50px] h-[50px]" />
          <p className="text-[16px] text-moss-green">
            Envie um e-mail
          </p>
          <p className="text-[14px]">
            biancapereiracnascimento@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-[20px] items-center">
          <img src={locationIcon} alt="Chat icon" className="w-[50px] h-[50px]" />
          <p className="text-[16px] text-moss-green">
            Agende uma consulta presencial
          </p>
          <p className="text-[14px] w-[217px] text-center">
            Espaço 44, Unidade 02: Rua Bocaiúva, 434, Morada da Colina. Uberlândia - MG
          </p>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:w-full lg:h-[620px] lg:relative lg:flex lg:items-center lg:justify-center lg:flex-col">
        <div className="w-full h-1/2 flex items-center justify-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[42px] text-jet">
              Entre em contato
            </h1>
            <div className="h-[1px] bg-jet w-[160px]"></div>
          </div>
        </div>

        <div className="w-full h-1/2 relative flex items-center justify-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col gap-[20px] items-center top-0">
            <img src={email} alt="Chat icon" className="w-[60px] h-[60px]" />
            <p className="text-[18px] text-moss-green">
              Envie um e-mail
            </p>
            <p className="text-[16px]">
              biancapereiracnascimento@gmail.com
            </p>
          </div>

          <div className="absolute w-1/2 left-0 flex justify-end pr-[260px] top-0">
            <div className="flex flex-col gap-[20px] items-center">
              <img src={chat} alt="Chat icon" className="w-[60px] h-[60px]" />
              <p className="text-[18px] text-moss-green">
                Mande uma mensagem
              </p>
              <p className="text-[16px]">
                (34) 99200-3533
              </p>
            </div>
          </div>

          <div className="absolute w-1/2 right-0 flex items-start pl-[260px] top-0">
            <div className="flex flex-col gap-[20px] items-center">
              <img src={locationIcon} alt="Chat icon" className="w-[60px] h-[60px]" />
              <p className="text-[18px] text-moss-green">
                Agende uma consulta presencial
              </p>
              <p className="text-[16px] w-[217px] text-center">
                Espaço 44, Unidade 02: Rua Bocaiúva, 434, Morada da Colina. Uberlândia - MG
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;