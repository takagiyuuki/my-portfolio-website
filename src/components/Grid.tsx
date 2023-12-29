type Props = {
  children: React.ReactNode;
};

export const Grid = ({ children }: Props) => {
  return <div className='grid grid-cols-2 gap-1 py-4'>{children}</div>;
};
