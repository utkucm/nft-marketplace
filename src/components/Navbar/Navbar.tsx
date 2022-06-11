import { FC, useState, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { MenuItems } from './MenuItems';
import { ButtonGroup } from './ButtonGroup';
import images from '@assets';
import { MobileMenu } from './MobileMenu';

// Move to a seperate folder
export const Navbar = () => {
  const [isActive, setIsActive] = useState('Explore NFTs');
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      {/* LOGO */}
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer" onClick={() => {}}>
            <Image src={images.logo02} objectFit="fill" width={32} height={32} alt="Logo" />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">RethjaMarkt</p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex" onClick={() => {}}>
            <Image src={images.logo02} objectFit="fill" width={32} height={32} alt="Logo" />
          </div>
        </Link>
      </div>
      {/* Toggle Theme */}
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
        {/* Menu Items Large Screen */}
        <div className="md:hidden flex">
          <MenuItems isMobile={false} isActive={isActive} setIsActive={setIsActive} />
          <div className="ml-4">
            <ButtonGroup setIsActive={setIsActive} />
          </div>
        </div>
      </div>
      {/* Menu Items Mobile REFACTOR */}
      {/* <div className="hidden md:flex ml-2">
        {isOpen ? (
          <Image
            src={images.cross}
            alt="Mobile Menu Close"
            objectFit="contain"
            width={20}
            height={20}
            onClick={() => setIsOpen(false)}
            className={theme === 'light' ? 'filter invert' : ''}
          />
        ) : (
          <Image
            src={images.menu}
            alt="Mobile Menu Open"
            objectFit="contain"
            width={25}
            height={25}
            onClick={() => setIsOpen(true)}
            className={theme === 'light' ? 'filter invert' : ''}
          />
        )}

        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems isActive={isActive} setIsActive={setIsActive} isMobile />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
              <ButtonGroup setIsActive={setIsActive} />
            </div>
          </div>
        )}
      </div> */}
      <MobileMenu isActive={isActive} setIsActive={setIsActive} theme={theme} />
    </nav>
  );
};
