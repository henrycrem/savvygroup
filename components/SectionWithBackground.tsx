import React from 'react';

interface SectionWithBackgroundProps {
  backgroundImageSrc: string;
  children: React.ReactNode;
}

const SectionWithBackground: React.FC<SectionWithBackgroundProps> = ({
  backgroundImageSrc,
  children,
}) => {
  return (
    <div
      className="bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    >
      {children}
    </div>
  );
};

export default SectionWithBackground;
