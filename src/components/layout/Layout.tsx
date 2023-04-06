import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='max-w-[400px] mx-auto bg-pink-50 h-screen relative'>
      <header className='bg-pink-200'>
        <h1 className='m-0 text-center'>cat-utils(App名募集中)</h1>
      </header>
      <main className='pb-4'>{children}</main>
      <footer className='bg-pink-200 absolute bottom-0 w-full'>
        <p className='text-center my-1 text-xs'>© 2023 progLearning</p>
      </footer>
    </div>
  );
};
