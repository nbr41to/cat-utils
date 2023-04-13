import { ToiletTable } from '@/components/features/record/ToiletTable';
import { useGetToilets } from '@/swr/useGetToilets';

export default function Toilet() {
  const { data } = useGetToilets();

  return (
    <div>
      <h1>おトイレ記録一覧</h1>
      <ToiletTable list={data || []} />
    </div>
  );
}
