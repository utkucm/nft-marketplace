import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Logo } from '@components';
import { FooterLinks, EmailContact } from '.';
import images from '@assets';
import { SocialMedia } from './SocialMedia';

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <Logo hideText={false} />
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">
            Get the latest updates
          </p>
          <EmailContact />
        </div>
        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks label="RethjaMarkt" links={['Explore', 'How It Works', 'Contact Us']} />
          <FooterLinks label="Support" links={['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy']} />
        </div>
      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            RethjaMarkt, Inc. All Rights Reserved.
          </p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};
