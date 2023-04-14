import { useGetUser } from '@/swr/useGetUser';
import { Button } from '@mantine/core';

export default function Mypage() {
  const { data } = useGetUser();

  return (
    <div>
      <h1 className='text-xl'>マイページ</h1>
      <div>
        <p>ユーザー名: {data?.name}</p>
        <p>メールアドレス: {data?.email}</p>
        <div>
          猫：
          {data?.cats.map((cat) => (
            <div key={cat.id}>
              <hr />
              <p>名前: {cat.name}</p>
              <p>体重：{cat.weight}</p>
              <p>性別：{cat.gender}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-2'>
        <Button fullWidth>猫を追加する</Button>
        <Button variant='outline' fullWidth color='dark'>
          ログアウト
        </Button>
      </div>
    </div>
  );
}
