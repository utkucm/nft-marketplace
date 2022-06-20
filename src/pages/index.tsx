import type { NextPage } from 'next';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

import { Banner, CreatorCard } from '@components';
import images from '@assets';
import { makeId } from 'utils';

const topSellers = [
  {
    id: 6,
    rank: 6,
    creatorImage: images.creator6,
    creatorName: `0x${makeId(3)}...${makeId(4)}`,
    creatorEths: 10 - 6 * 0.5,
  },
  {
    id: 7,
    rank: 7,
    creatorImage: images.creator7,
    creatorName: `0x${makeId(3)}...${makeId(4)}`,
    creatorEths: 10 - 7 * 0.5,
  },
  {
    id: 8,
    rank: 8,
    creatorImage: images.creator8,
    creatorName: `0x${makeId(3)}...${makeId(4)}`,
    creatorEths: 10 - 8 * 0.5,
  },
  {
    id: 9,
    rank: 9,
    creatorImage: images.creator9,
    creatorName: `0x${makeId(3)}...${makeId(4)}`,
    creatorEths: 10 - 9 * 0.5,
  },
  {
    id: 10,
    rank: 10,
    creatorImage: images.creator10,
    creatorName: `0x${makeId(3)}...${makeId(4)}`,
    creatorEths: 10 - 10 * 0.5,
  },
  {
    id: 11,
    rank: 11,
    creatorImage: images.creator1,
    creatorName: `0x${makeId(3)}...${makeId(4)}`,
    creatorEths: 10 - 11 * 0.5,
  },
];

const Home: NextPage = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const { theme } = useTheme();
  const parentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current!.scrollLeft -= scrollAmount;
    } else {
      current!.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current: scrollCurrent } = scrollRef;
    const { current: parentCurrent } = parentRef;

    if (scrollCurrent!.scrollWidth >= parentCurrent!.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          label="Discover, collect, and sell extraordinary NFTs"
        />
        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            Top Sellers
          </h1>
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
              {topSellers.map(({ id, rank, creatorImage, creatorName, creatorEths }) => (
                <CreatorCard
                  key={`creator-${id}`}
                  rank={rank}
                  creatorImage={creatorImage}
                  creatorName={creatorName}
                  creatorEths={creatorEths}
                />
              ))}
              {!hideButtons && (
                <>
                  <div
                    onClick={() => handleScroll('left')}
                    className="absolute w-8 h-8 minglg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                  >
                    <Image
                      src={images.left}
                      alt="Left Arrow"
                      layout="fill"
                      objectFit="contain"
                      className={theme === 'light' ? 'filter invert' : ''}
                    />
                  </div>
                  <div
                    onClick={() => handleScroll('right')}
                    className="absolute w-8 h-8 minglg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                  >
                    <Image
                      src={images.right}
                      alt="Left Arrow"
                      layout="fill"
                      objectFit="contain"
                      className={theme === 'light' ? 'filter invert' : ''}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
