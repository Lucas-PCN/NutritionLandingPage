const HeaderButton = () => {
  return (
    <div className="ml-auto">
      <a
        href="https://api.whatsapp.com/send/?phone=5534992003533&text&type=phone_number&app_absent=0&wame_ctl=1&fbclid=PAQ0xDSwK4Hn5leHRuA2FlbQIxMAABp3HMAo2E3bN5Gos8gzPUgzRdJc3yb1_l-HtAhlgaQzAr8PPEHx_B16lshomD_aem_57Dwdr8SyOW4yDWQ6b7flQ"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-jet rounded-full px-6 py-2 text-sm hover:bg-jet hover:text-white transition"
      >
        Agende sua consulta
      </a>
    </div>
  );
};

export default HeaderButton;