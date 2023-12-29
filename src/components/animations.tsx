import { YouTubeEmbed } from '@next/third-parties/google';

export const Animations = () => {
  return (
    <div className='grid grid-cols-1 gap-1 lg:grid-cols-2'>
      <VideoFlame videoid='M1Omy-1vPCs' />
      <VideoFlame videoid='ZE4Q_ylGiwM' />
      <VideoFlame videoid='wB6eNch9frQ' />
      <VideoFlame videoid='1L57-Otwxqk' />
    </div>
  );
};

const VideoFlame = async ({ videoid }: Required) => {
  return (
    <div className='py-4'>
      <YouTubeEmbed videoid={videoid} />
    </div>
  );
};

type Props = [
  {
    title: string;
    id: string;
  },
];

const VideoList: Object = [
  { title: 'Sample1', id: 'sample1' },
  { title: 'Sample2', id: 'sample2' },
  { title: 'Sample3', id: 'sample3' },
  { title: 'Sample4', id: 'sample4' },
  { title: 'Sample5', id: 'sample5' },
  { title: 'Sample6', id: 'sample6' },
  { title: 'Sample7', id: 'sample7' },
];

// export const AnimationMap = VideoList.map((item, index) => {
//   return (
//     <div key={index}>
//       <VideoFlame videoid={item.id} />
//       <p>{item.title}</p>
//     </div>
//   );
// });
