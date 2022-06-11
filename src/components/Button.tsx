import { FC } from 'react';

interface IProps {
  classStyles: string;
  label: string;
  handleClick?: () => void;
}

export const Button: FC<IProps> = ({ classStyles, label, handleClick }) => {
  return (
    <button
      type="button"
      className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
