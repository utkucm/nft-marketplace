/* eslint-disable react/display-name */
import Link from 'next/link';
import { FC, forwardRef } from 'react';

interface Props {
  label: string;
  links: Array<{ id: number; label: string; href: string }>;
}
// TODO: REFACTOR LINks

export const FooterLinks: FC<Props> = ({ label, links }) => {
  return (
    <div className="flex-1 justify-start items-start">
      <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">{label}</h3>
      {links.map(({ id, label, href }) => {
        return (
          <p
            key={id}
            className="font-poppins dark:text-white text-nft-black-1 font-normal cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3"
          >
            <Link href={href} passHref>
              {label}
            </Link>
          </p>
        );
      })}
    </div>
  );
};
