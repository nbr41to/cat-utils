import { ToiletTable } from '@/components/features/record/ToiletTable';
import { useGetToilets } from '@/swr/useGetToilets';
import { LoadingOverlay } from '@mantine/core';

export default function Toilet() {
  const { data, isLoading } = useGetToilets();

  return (
    <div>
      <h1 className='text-xl'>おトイレ記録一覧</h1>
      <div>
        <ToiletTable list={data || []} />
        <LoadingOverlay visible={isLoading} />
      </div>
    </div>
  );
}
