import { FC } from 'react';

interface Props {
  label: string;
  links: string[];
}

export const FooterLinks: FC<Props> = ({ label, links }) => {
  return (
    <div className="flex-1 justify-start items-start">
      <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">{label}</h3>
      {links.map((link, index) => (
        <p
          key={index}
          className="font-poppins dark:text-white text-nft-black-1 font-normal cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3"
        >
          {link}
        </p>
      ))}
    </div>
  );
};
