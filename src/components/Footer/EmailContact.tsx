import { Button } from '@components';

export const EmailContact = () => {
  return (
    <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded:md">
      <input
        type="email"
        placeholder="Your email"
        className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none"
      />
      <div className="flex-initial">
        <Button label="Email me" classStyles="rounded-md" />
      </div>
    </div>
  );
};
