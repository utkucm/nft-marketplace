import Link from 'next/link';
import { FC, Dispatch, SetStateAction } from 'react';

interface Props {
  isMobile: boolean;
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
}

const links: { label: string; href: string }[] = [
  { label: 'Explore NFTs', href: '/' },
  { label: 'Listed NFTs', href: '/created-nfts' },
  { label: 'My NFTs', href: '/my-nfts' },
];

export const MenuItems: FC<Props> = ({ isMobile, isActive, setIsActive }) => {
  // const generateLink = (index: number) => {
  //   switch (index) {
  //     case 0:
  //       return '/';
  //       break;
  //     case 1:
  //       return '/created-nfts';
  //       break;
  //     case 2:
  //       return '/my-nfts';
  //       break;
  //     default:
  //       return '/';
  //       break;
  //   }
  // };

  return (
    <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
      {links.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setIsActive(item.label);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 ${
            isActive === item.label ? 'dark:text-white text-nft-black-1' : 'dark:text-nft-gray-3 text-nft-gray-2'
          }`}
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
