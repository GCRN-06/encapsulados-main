// import candyIcon from '@/assets/candy-icon.png';

export const PromoBanner = () => {
  return (
    <div className="bg-gradient-banner text-white py-2 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-8 px-8">
          <div className="flex items-center space-x-2">
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
            <span className="text-sm font-medium">
              FRETE GRÁTIS A PARTIR DE €199,90
            </span>
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
          </div>
        </div>

        {/* Duplicate for seamless scroll */}
        <div className="flex items-center space-x-8 px-8">
          <div className="flex items-center space-x-2">
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
            <span className="text-sm font-medium">
              FRETE GRÁTIS A PARTIR DE €199,90
            </span>
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
          </div>
        </div>

        {/* More duplicates for continuous effect */}
        <div className="flex items-center space-x-8 px-8">
          <div className="flex items-center space-x-2">
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
            <span className="text-sm font-medium">
              FRETE GRÁTIS A PARTIR DE €199,90
            </span>
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
          </div>
        </div>

        <div className="flex items-center space-x-8 px-8">
          <div className="flex items-center space-x-2">
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
            <span className="text-sm font-medium">
              FRETE GRÁTIS A PARTIR DE €199,90
            </span>
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
          </div>
        </div>

        <div className="flex items-center space-x-8 px-8">
          <div className="flex items-center space-x-2">
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
            <span className="text-sm font-medium">
              FRETE GRÁTIS A PARTIR DE €199,90
            </span>
            {/* <img src={candyIcon} alt="Candy" className="w-4 h-4" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
