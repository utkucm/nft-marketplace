import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import images from '@assets';

// TODO: REFACTOR LINKS

export const SocialMedia = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-row sm:mt-4">
      {[images.instagram, images.twitter, images.telegram, images.discord].map((image, index) => (
        <div key={index} className="mx-2 cursor-pointer">
          <Link href="/">
            <Image
              src={image}
              alt="social media"
              objectFit="contain"
              width={24}
              height={24}
              className={theme === 'light' ? 'filter invert' : ''}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
