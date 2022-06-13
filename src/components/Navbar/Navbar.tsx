import { FC, useState } from 'react';

import { useTheme } from 'next-themes';

import { MobileMenu, ThemeToggler } from './';
import { Logo } from '@components';

// Move to a seperate folder
export const Navbar: FC = () => {
  const [isActive, setIsActive] = useState('Explore NFTs');
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      {/* LOGO */}
      <div className="flex flex-1 flex-row justify-start">
        <Logo hideText={true} />
      </div>
      <ThemeToggler isActive={isActive} setIsActive={setIsActive} theme={theme} setTheme={setTheme} />
      <MobileMenu isActive={isActive} setIsActive={setIsActive} theme={theme} />
    </nav>
  );
};
