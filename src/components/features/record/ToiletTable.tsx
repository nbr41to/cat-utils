import type { FC } from 'react';
import { Toilet } from '@/types';
import { Table } from '@mantine/core';
import dayjs from 'dayjs';
import { TOILET_LABELS } from '@/constants';

type Props = {
  list: Toilet[];
};

export const ToiletTable: FC<Props> = ({ list }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>time</th>
          <th>number</th>
          <th>remarks</th>
        </tr>
      </thead>
      <tbody>
        {list.map((data) => (
          <tr key={data.id}>
            <td>{dayjs(data.time).format('YYYY/MM/DD HH:mm')}</td>
            <td>{TOILET_LABELS[data.number]}</td>
            <td>{data.remarks}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
