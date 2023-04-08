import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <div className='max-w-[400px] mx-auto bg-pink-50 h-screen relative'>
      <header className='bg-pink-200 flex justify-between h-14 items-center px-2'>
        <h1 className='m-0 text-center text-2xl'>cat-utils(App名募集中)</h1>
        <Burger opened={opened} onClick={toggle} aria-label={label} />
      </header>

      <main className='pb-4 my-4 px-4'>{children}</main>

      <footer className='bg-pink-200 absolute bottom-0 w-full'>
        <p className='text-center my-1 text-xs'>© 2023 progLearning</p>
      </footer>

      <Drawer
        size='xs'
        position='right'
        title='Menu'
        opened={opened}
        onClose={close}
      >
        <div className='flex flex-col gap-2'>
          <Link href='/calculator' onClick={close}>
            計算ツール
          </Link>
          <Link href='/record' onClick={close}>
            簡単記録
          </Link>
          <Link href='/record/toilet' onClick={close}>
            おトイレ記録一覧
          </Link>
          <Link href='/mypage' onClick={close}>
            マイページ
          </Link>
          <Link href='/login' onClick={close}>
            ログイン
          </Link>
          <Link href='/signup' onClick={close}>
            サインアップ
          </Link>
        </div>
      </Drawer>
    </div>
  );
};
