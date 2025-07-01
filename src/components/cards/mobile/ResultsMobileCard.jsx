import pesinho from '../../../assets/icons/pesinho.png';
import balanca from '../../../assets/icons/balanca.png';
import maca from '../../../assets/icons/maca.png';
import garfinho from '../../../assets/icons/garfinho.png';
import check from '../../../assets/icons/check.png';

const ResultsMobileCard = () => {
  return (
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
  );
};

export default ResultsMobileCard;