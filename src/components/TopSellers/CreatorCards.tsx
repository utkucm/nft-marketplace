import { makeId } from 'utils';
import images from '@assets';
import { CreatorCard } from '.';

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

export const CreatorCards = () => {
  return (
    <>
      {topSellers.map(({ id, rank, creatorImage, creatorName, creatorEths }) => (
        <CreatorCard
          key={`creator-${id}`}
          rank={rank}
          creatorImage={creatorImage}
          creatorName={creatorName}
          creatorEths={creatorEths}
        />
      ))}
    </>
  );
};
