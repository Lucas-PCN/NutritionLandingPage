import HomeButton from '../../shared/HomeButton';

const HomeDesktopCard = () => {
  return (
    <div className="flex flex-col items-center text-center gap-7 rounded-xl p-5">
      <p className="text-[22px] text-white">CRN-9 33640</p>

      <h1 className="text-[52px] font-light text-white leading-snug">
        Nutricionista <br />
        <span className="font-bold">Bianca Pereira</span>
      </h1>

      <p className="text-[22px] text-white">
        Nutrição esportiva,<br />emagrecimento e saúde
      </p>

      <HomeButton />
    </div>
  );
};

export default HomeDesktopCard;