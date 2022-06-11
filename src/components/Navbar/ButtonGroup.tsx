import { NextRouter, useRouter } from 'next/router';
import { FC, Dispatch, SetStateAction, useState } from 'react';

import { Button } from '@components';

interface Props {
  setIsActive: Dispatch<SetStateAction<string>>;
}

export const ButtonGroup: FC<Props> = ({ setIsActive }) => {
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter();

  return isConnected ? (
    <Button
      label="Create a NFT"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        setIsActive('');
        router.push('/create-nft');
      }}
    />
  ) : (
    <Button label="Connect" classStyles="mx-2 rounded-xl" handleClick={() => {}} />
  );
};
