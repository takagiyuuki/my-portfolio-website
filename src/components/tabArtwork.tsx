import Image from 'next/image';

export const TabArtwork = () => {
  return (
    <div>
      <TestImage />
      <TestImage />
      <TestImage />
      <TestImage />
    </div>
  );
};

const TestImage = () => {
  return (
    <div>
      <p>this is sample</p>
      <Image src='/next.svg' width={100} height={100} alt='test' />
    </div>
  );
};
