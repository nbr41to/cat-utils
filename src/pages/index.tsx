import { InputBase, Select } from '@mantine/core';
import Head from 'next/head';
import { useMemo, useState } from 'react';

export default function Home() {
  const [weight, setWeight] = useState(0);
  const [calorie, setCalorie] = useState(0);
  const [coefficient, setCoefficient] = useState(0);

  const RER = useMemo(() => {
    const kg = weight / 1000;
    const result100 = kg ** 0.75 * 70 * 100;
    const rounded = Math.round(result100);

    return rounded / 100;
  }, [weight]);

  const DER = useMemo(() => {
    const result100 = RER * coefficient * 100;
    const rounded = Math.round(result100);

    return rounded / 100;
  }, [RER, coefficient]);

  const rice = useMemo(() => {
    const perGram = calorie / 100;
    const result100 = (DER / perGram) * 100;

    const rounded = Math.round(result100);

    return rounded / 100;
  }, [DER, calorie]);

  return (
    <>
      <Head>
        <title>cat-utils</title>
        <meta name='description' content='Generated by create next app' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1.0'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h3>カロリー計算</h3>
        <div>
          <InputBase
            fz='lg'
            label='体重（g）'
            type='number'
            onChange={(e) => setWeight(e.target.valueAsNumber)}
          />
          <InputBase
            label='100gあたりのカロリー（cal）'
            type='number'
            onChange={(e) => setCalorie(e.target.valueAsNumber)}
          />
          <Select
            label='ライフステージ'
            data={[
              { label: '子猫（4ヶ月未満）', value: '3.0' },
              { label: '子猫（4～6ヶ月）', value: '2.5' },
              { label: '子猫（7～12ヶ月）', value: '2.0' },
              { label: '標準体型の成猫（未避妊・未去勢）', value: '1.4' },
              { label: '標準体型の成猫（避妊・去勢済）', value: '1.2' },
              { label: '活動的な猫', value: '1.6' },
              { label: '肥満気味の猫', value: '1.0' },
              { label: 'ダイエット中の猫', value: '0.8' },
              { label: '増量中の猫', value: '1.3' },
              { label: '高齢猫', value: '1.1' },
              { label: '妊娠中', value: '2.0' },
            ]}
            onChange={(value) => setCoefficient(parseInt(value || '', 10))}
          />
        </div>
        <div>
          <h4>計算式</h4>
          <p></p>
        </div>
        <div>
          <h3>RER（安静時エネルギー要求量）</h3>
          <div className='text-xl font-bold'>{RER} cal</div>
          <div className='text-xs'>※ {`RER = [体重(kg)] × √0.75 × 70`}</div>
          <h3>DER（1日あたりのエネルギー要求量）</h3>
          <div className='text-xl font-bold'>{DER} cal</div>
          <div className='text-xs'>※ {`DER = RER × [ライフステージ係数]`}</div>
          <h3>与えるご飯の量（g）</h3>
          <div className='text-xl font-bold'>{rice} g</div>
          <div className='text-xs'>
            ※ {`[与えるご飯のカロリー量(g)] = DER ÷ [100gあたりのカロリー]`}
          </div>
        </div>
      </div>
    </>
  );
}
