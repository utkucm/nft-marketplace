import { useEffect, useRef, useState } from 'react';

import images from '@assets';

import { Arrow, CreatorCards } from '.';

export const TopSellers = () => {
  const [hideButtons, setHideButtons] = useState(false);
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
    <div>
      <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
        Top Sellers
      </h1>
      <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
        <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
          <CreatorCards />
          {!hideButtons && (
            <>
              <Arrow src={images.left} alt="Left Arrow" style="left-0" handleScroll={handleScroll} direction="left" />
              <Arrow
                src={images.right}
                alt="Left Arrow"
                style="right-0"
                handleScroll={handleScroll}
                direction="right"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
