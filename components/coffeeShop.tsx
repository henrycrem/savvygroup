import React from 'react';

interface CoffeeSectionWithBackgroundProps {
  backgroundImageSrc: string;
  children: React.ReactNode;
}

const CoffeeSectionWithBackground: React.FC<CoffeeSectionWithBackgroundProps> = ({
  backgroundImageSrc,
  children,
}) => {
  return (
    <div
      className="bg-cover bg-center bg-fixed h-96 md:h-auto"
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    >
      {children}
    </div>
  );
};

export default CoffeeSectionWithBackground;
