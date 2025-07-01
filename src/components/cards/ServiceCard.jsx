const ServiceCard = ({ title, description, image, customWidth }) => {
  return (
    <div className="flex flex-col items-center gap-[28px]">
      <img src={image} alt="retorno" className="w-[280px] h-[142px] lg:w-[362px] lg:h-[183px]" />
      <h2 className="text-[16px] font-bold lg:text-[20px]">{title}</h2>
      <p className={`text-[14px] ${customWidth} text-center`}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;