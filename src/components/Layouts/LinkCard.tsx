import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { LinkCardProps } from '@/lib/type';

export const LinkCard = ({
  title = null,
  desc = null,
  children = null,
  icon = null,
}: LinkCardProps) => {
  return (
    <div className='group font-mono'>
      <Card className='transition duration-700 hover:border group-hover:scale-95'>
        <CardHeader>
          {title !== null ? (
            <CardTitle className='flex flex-row [&>*]:pr-0.5'>
              {icon}
              <h1>{title}</h1>
            </CardTitle>
          ) : null}
          {desc !== null ? (
            <CardDescription>
              <p>{desc}</p>
            </CardDescription>
          ) : null}
        </CardHeader>
        {children !== null ? <CardContent>{children}</CardContent> : null}
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};
