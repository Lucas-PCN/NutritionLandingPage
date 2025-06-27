import morangos from '../assets/backgrounds/morangos.png';
import onda from '../assets/backgrounds/waveDown.png';

const Transition = () => {
  return (
    <section className="bg-moss-green/70 w-full h-[150px] lg:h-[289px] bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${morangos})` }}>
      <img src={onda} alt="Onda" className="absolute top-0 left-0 w-full object-contain pointer-events-none" />
    </section>
  );
};

export default Transition;