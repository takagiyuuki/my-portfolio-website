import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { LinkCard } from '@/components/Layouts//LinkCard';
import { Grid } from '@/components/Layouts/Grid';

export const Services = () => {
  return (
    <Grid>
      <GithubCard href='https://github.com/takagiyuuki/portfolio' />
      <GithubCard href='https://github.com/takagiyuuki/portfolio' />
      <GithubCard href='https://github.com/takagiyuuki/portfolio' />
      <GithubCard href='https://github.com/takagiyuuki/portfolio' />
    </Grid>
  );
};

type Props = {
  href: string;
};

const GithubCard = ({ href }: Props) => {
  return (
    <LinkCard
      title={href}
      desc={<Link href={href}>{href}</Link>}
      icon={
        <div className='w-8'>
          <GitHubLogoIcon />
        </div>
      }
    />
  );
};
