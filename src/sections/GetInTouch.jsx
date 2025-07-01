import legumesMobile from '../assets/backgrounds/legumesMobile.png';
import legumesDesktop from '../assets/backgrounds/legumesDesktop.png';
import GetInTouchCard from '../components/cards/GetInTouchCard';

const GetInTouch = () => {
  const isMobile = window.innerWidth < 1024;

  return (
    <section className="w-full flex justify-center items-center py-20 bg-no-repeat bg-cover" style={isMobile ? { backgroundImage: `url(${legumesMobile})` }: { backgroundImage: `url(${legumesDesktop})` }}>
      <GetInTouchCard />
    </section>
  );
};

export default GetInTouch;