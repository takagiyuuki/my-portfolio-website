export type RootLayoutProps = {
  children: React.ReactNode;
};

export type LinkIconProps = {
  children?: React.ReactNode;
  href: string | URL;
  text?: string | null;
  target?: string;
  rel?: string;
};

export type LinkCardProps = {
  title?: string | null;
  desc?: React.ReactNode | null;
  children?: React.ReactNode | null;
  icon?: React.ReactNode | null;
};
