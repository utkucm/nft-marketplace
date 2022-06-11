import { Dispatch, FC, SetStateAction, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import images from '@assets';
import { MenuItems } from './MenuItems';
import { ButtonGroup } from './ButtonGroup';

interface Props {
  theme: string | undefined;
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
}

interface MobileMenuProps {
  src: StaticImageData;
  size: number;
  alt: string;
  handleClick: () => void;
  theme: string | undefined;
}

const MobileMenuIcon: FC<MobileMenuProps> = ({ src, size, alt, handleClick, theme }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      onClick={handleClick}
      objectFit="contain"
      className={theme === 'light' ? 'filter invert' : ''}
    />
  );
};

export const MobileMenu: FC<Props> = ({ theme, isActive, setIsActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hidden md:flex ml-2">
      {isOpen ? (
        <>
          {/* <Image
            src={images.cross}
            alt="Mobile Menu Close"
            objectFit="contain"
            width={20}
            height={20}
            onClick={() => setIsOpen(false)}
            className={theme === 'light' ? 'filter invert' : ''}
          /> */}
          <MobileMenuIcon
            src={images.cross}
            alt="Mobile Menu Close"
            size={20}
            handleClick={() => setIsOpen(false)}
            theme={theme}
          />
        </>
      ) : (
        // <Image
        //   src={images.menu}
        //   alt="Mobile Menu Open"
        //   objectFit="contain"
        //   width={25}
        //   height={25}
        //   onClick={() => setIsOpen(true)}
        //   className={theme === 'light' ? 'filter invert' : ''}
        // />
        <MobileMenuIcon
          src={images.menu}
          alt="Mobile Menu Open"
          size={25}
          handleClick={() => setIsOpen(true)}
          theme={theme}
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
    </div>
  );
};
