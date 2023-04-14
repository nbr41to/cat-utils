import { Button } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Top() {
  const router = useRouter();

  return (
    <div>
      <h1 className='text-lg'>ねこ飼うための便利な機能だよ</h1>
      <div className='space-y-2'>
        <Button
          size='lg'
          fullWidth
          color='blue'
          onClick={() => router.push('/calculator')}
        >
          カロリー計算
        </Button>
        <Button
          size='lg'
          fullWidth
          color='teal'
          onClick={() => router.push('/record')}
        >
          簡単記録
        </Button>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            fullWidth
            color='gray'
            onClick={() => router.push('/login')}
          >
            ログイン
          </Button>
          <Button
            variant='outline'
            fullWidth
            color='dark'
            onClick={() => router.push('/signup')}
          >
            登録
          </Button>
        </div>
      </div>
    </div>
  );
}
