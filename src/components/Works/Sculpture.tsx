import Image from 'next/image';

import { LinkCard } from '@/components/Layouts//LinkCard';
import { Grid } from '@/components/Layouts/Grid';

export const CG = () => {
  return (
    <Grid>
      <LinkCard title='Test Image' desc='test brbrbr'>
        <TestImage />
      </LinkCard>
      <LinkCard title='Test Image' desc='test brbrbr'>
        <TestImage />
      </LinkCard>
      <LinkCard title='Test Image' desc='test brbrbr'>
        <TestImage />
      </LinkCard>
      <LinkCard title='Test Image' desc='test brbrbr'>
        <TestImage />
      </LinkCard>
      <LinkCard title='Test Image' desc='test brbrbr'>
        <TestImage />
      </LinkCard>
    </Grid>
  );
};

const TestImage = () => {
  return <Image src='/next.svg' width={100} height={100} alt='test' />;
};
