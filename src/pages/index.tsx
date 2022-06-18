import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';

import { Banner, CreatorCard } from '@components';

const Home: NextPage = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          label="Discover, collect, and sell extraordinary NFTs"
        />
      </div>
      <div>
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          Top Sellers
        </h1>
        <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
          <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
            {[6, 7, 8, 9, 10].map((i) => (
              <CreatorCard key={`creator-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
