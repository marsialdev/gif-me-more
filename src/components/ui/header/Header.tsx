import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const logoImage = `${import.meta.env.BASE_URL}images/logo.png`;
  return (
    <header className="flex flex-col justify-center items-center gap-5 mb-12 md:mb-13">
      <div className="w-1/2 md:w-1/4">
        <img src={logoImage} alt="Gif Me More Logo" loading="lazy" />
      </div>
      <h2 className="text-center text-xl text-white">¡Never enough GIF!</h2>
      {children}
    </header>
  );
};
