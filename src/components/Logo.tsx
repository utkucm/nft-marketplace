import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import images from '@assets';

interface Props {
  hideText: boolean;
}

export const Logo: FC<Props> = ({ hideText }) => {
  return (
    <Link href="/">
      <div className="flexCenter cursor-pointer" onClick={() => {}}>
        <Image src={images.logo02} objectFit="fill" width={32} height={32} alt="Logo" />
        <p className={`dark:text-white text-nft-black-1 font-semibold text-lg ml-1 ${hideText ? 'md:hidden' : ''}`}>
          RethjaMarkt
        </p>
      </div>
    </Link>
  );
};
