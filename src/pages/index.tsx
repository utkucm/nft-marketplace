import type { NextPage } from 'next';

import { Banner } from '@components';
import { TopSellers } from 'components/TopSellers';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          label="Discover, collect, and sell extraordinary NFTs"
        />
        <TopSellers />
        {/* BIDS */}
        <div className="mt-10">
          <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
              Hot Bids
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
