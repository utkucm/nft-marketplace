import { Dispatch, FC, SetStateAction } from 'react';
import { ButtonGroup, MenuItems } from '.';

interface Props {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
}

export const ThemeToggler: FC<Props> = ({ theme, setTheme, isActive, setIsActive }) => {
  return (
    <div className="flex flex-initial flex-row justify-end">
      <div className="flex items-center mr-2">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
          <i className="fas fa-sun" />
          <i className="fas fa-moon" />
          <div className="w-3 h-3 absolute bg-white rounded-full ball" />
        </label>
      </div>
      {/* Menu Items Large Screen */}
      <div className="md:hidden flex">
        <MenuItems isMobile={false} isActive={isActive} setIsActive={setIsActive} />
        <div className="ml-4">
          <ButtonGroup setIsActive={setIsActive} />
        </div>
      </div>
    </div>
  );
};
