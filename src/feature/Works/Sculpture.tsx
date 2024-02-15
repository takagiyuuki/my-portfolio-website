import Image from 'next/image';

import { Grid } from '@/components/Elements/Grid';
import { LinkCard } from '@/components/Elements/LinkCard';

export const CG = () => {
  return (
    <Grid>
      <LinkCard
        title='Test Image'
        desc='test brbrbr'
      >
        <TestImage />
      </LinkCard>
      <LinkCard
        title='Test Image'
        desc='test brbrbr'
      >
        <TestImage />
      </LinkCard>
      <LinkCard
        title='Test Image'
        desc='test brbrbr'
      >
        <TestImage />
      </LinkCard>
      <LinkCard
        title='Test Image'
        desc='test brbrbr'
      >
        <TestImage />
      </LinkCard>
      <LinkCard
        title='Test Image'
        desc='test brbrbr'
      >
        <TestImage />
      </LinkCard>
    </Grid>
  );
};

const TestImage = () => {
  return (
    <Image
      src='/next.svg'
      width={100}
      height={100}
      alt='test'
    />
  );
};
