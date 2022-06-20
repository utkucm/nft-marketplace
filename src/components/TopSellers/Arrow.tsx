import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';

interface Props {
  style: string;
  src: StaticImageData;
  alt: string;
  direction: string;
  handleScroll: (direction: string) => void;
}

export const Arrow: FC<Props> = ({ src, alt, style, handleScroll, direction }) => {
  const { theme } = useTheme();
  return (
    <div
      onClick={() => handleScroll(direction)}
      className={`absolute w-8 h-8 minglg:w-12 minlg:h-12 top-45 cursor-pointer ${style}`}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className={theme === 'light' ? 'filter invert' : ''}
      />
    </div>
  );
};
