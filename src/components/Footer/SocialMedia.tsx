import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import images from '@assets';

// TODO: REFACTOR LINKS

const socialMediaLinks = [
  { id: 0, image: images.instagram, href: '/' },
  { id: 1, image: images.twitter, href: '/' },
  { id: 2, image: images.telegram, href: '/' },
  { id: 3, image: images.discord, href: '/' },
];

export const SocialMedia = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-row sm:mt-4">
      {socialMediaLinks.map(({ id, image, href }) => (
        <Link key={id} href={href} passHref>
          <div className="mx-2 cursor-pointer">
            <Image
              src={image}
              alt="social media"
              objectFit="contain"
              width={24}
              height={24}
              className={theme === 'light' ? 'filter invert' : ''}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
