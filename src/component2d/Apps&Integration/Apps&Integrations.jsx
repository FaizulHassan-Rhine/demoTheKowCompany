

const Integrations = () => {
  return (
    <div className="pt-10 " id="apps">
      <div className="bg-[#B1CC40] pb-20 pt-20">
      <div className="pt-5 pb-20">
          <div className="relative  border border-white">
            <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#B1CC40] px-12 py-1 text-3xl md:text-4xl text-kow-text-black text-center font-bold">
                {`APPS & INTEGRATION`}
              </span>
            </h2>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-12">
            <a href="https://shopify.thekowcompany.com/Account/Login" target="_blank" rel="noreferrer" className="cursor-pointer ">
            <div className="w-[180px]  ">
              <img src="/img/Apps/shopify_white.png" />
            </div>
            </a>
            <a href="https://app.thekowcompany.com/Identity/Account/Login?ReturnUrl=%2F" className="cursor-pointer " target="_blank" rel="noreferrer">
            <div className="w-[180px] ">
              <img src="/img/Apps/The-KOW-Company_white.png" />
            </div>
            </a>
            <a href="https://www.nureg.de/" className="cursor-pointer " target="_blank" rel="noreferrer">
            <div className="w-[180px] ">
              <img src="/img/Apps/nureg_white.png" />
            </div>
            </a>
            <a href="https://www.covisionmedialab.com/en" className="cursor-pointer " target="_blank" rel="noreferrer">
            <div className="w-[180px] ">
              <img src="/img/Apps/covision-lab_white .png" />
            </div>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Integrations;
