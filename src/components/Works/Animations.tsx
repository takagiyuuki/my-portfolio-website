import { YouTubeEmbed } from '@next/third-parties/google';

import { LinkCard } from '@/components/Layouts//LinkCard';

export const Animations = () => {
  return (
    <div className='grid grid-cols-1 gap-1 lg:grid-cols-2'>
      <YouTubeCard />
      <YouTubeCard />
      <YouTubeCard />
      <YouTubeCard />
      <YouTubeCard />
      <YouTubeCard />
    </div>
  );
};

const YouTubeCard = () => {
  let videoId = 'M1Omy-1vPCs';
  let href = 'M1Omy-1vPCs';
  console.log(href);
  console.log(videoId);
  return (
    <LinkCard>
      <YouTubeEmbed videoid={videoId} />
    </LinkCard>
  );
};
