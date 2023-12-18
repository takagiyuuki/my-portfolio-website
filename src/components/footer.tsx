import Link from 'next/link';

function Copyright() {
  return (
    <p>
      {'Copyright © '}
      <Link className='bg-inherit' href='https://mui.com/'>
        Yuki Takagi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

export const Footer = () => {
  return (
    <div className='mt-auto px-2 py-3'>
      <hr className='border-dashed ' />
      <div className='max-w-sm flex-col text-center'>
        <p>Thanks!</p>
        <Copyright />
      </div>
    </div>
  );
};
