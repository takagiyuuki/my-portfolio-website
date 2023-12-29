import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Grid } from './Grid';
import { LinkCard } from './LinkCard';

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
  let repoArray: Array<string> = href.split('https://github.com/');
  console.log({ repoArray });
  let repo: string = repoArray[1];
  console.log({ repo });

  return (
    <LinkCard
      title={repo}
      desc={<Link href={href}>{href}</Link>}
      icon={
        <div className='w-8'>
          <GitHubLogoIcon />
        </div>
      }
    />
  );
};
