import HomeButton from '../../shared/HomeButton';

const HomeMobileCard = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <p className="text-sm text-black">CRN-9 33640</p>

      <h1 className="text-xl font-normal text-black leading-snug">
        Nutricionista <br />
        <span className="font-bold">Bianca Pereira</span>
      </h1>

      <p className="text-sm text-black leading-snug">
        Nutrição esportiva,<br />emagrecimento e saúde
      </p>

      <HomeButton />
    </div>
  );
};

export default HomeMobileCard;