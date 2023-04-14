import { Button } from '@mantine/core';
import Link from 'next/link';

export default function Record() {
  return (
    <div>
      <h1 className='text-xl'>簡単記録</h1>
      <div className='flex gap-2'>
        <Button size='xl' fullWidth color='blue'>
          おしっこした
        </Button>
        <Button size='xl' fullWidth color='orange'>
          うんちした
        </Button>
      </div>
      <div className='mt-2'>
        <Button size='xl' fullWidth color='teal'>
          メモを残して記録
        </Button>
      </div>
      <div className='mt-4 text-right'>
        <Link href='/record/toilet'>記録を見る</Link>
      </div>
    </div>
  );
}
