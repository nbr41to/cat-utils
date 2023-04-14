import { InputBase, SegmentedControl, Select } from '@mantine/core';
import { useMemo, useState } from 'react';

export default function CatCalculator() {
  const [isOther, setIsOther] = useState<'0' | '1'>('0');
  const [weight, setWeight] = useState(0);
  const [calorie, setCalorie] = useState(0);
  const [otherCalorie, setOtherCalorie] = useState(0);
  const [otherAmount, setOtherAmount] = useState(0);
  const [coefficientStr, setCoefficient] = useState('3.0');

  const RER = useMemo(() => {
    const kg = weight / 1000;
    const result100 = kg ** 0.75 * 70 * 100;
    const rounded = Math.round(result100);

    return rounded / 100;
  }, [weight]);

  const DER = useMemo(() => {
    const coefficient = parseInt(coefficientStr, 10);
    const result100 = RER * coefficient * 100;
    const rounded = Math.round(result100);

    return rounded / 100;
  }, [RER, coefficientStr]);

  const rice = useMemo(() => {
    const perGram = calorie / 100;
    const calPerDay =
      DER -
      (otherCalorie && otherAmount ? (otherCalorie * otherAmount) / 100 : 0);
    const result100 = (calPerDay / perGram) * 100;
    const rounded = Math.round(result100);

    return rounded / 100;
  }, [DER, calorie, otherCalorie, otherAmount]);

  return (
    <div>
      <h2 className='text-lg'>猫が一日に必要な摂取カロリー量</h2>
      <div className='space-y-2'>
        <InputBase
          fz='lg'
          label='体重（g）'
          type='number'
          value={weight}
          onChange={(e) => setWeight(e.target.valueAsNumber)}
        />
        <InputBase
          label='100gあたりのカロリー（cal）'
          type='number'
          value={calorie}
          onChange={(e) => setCalorie(e.target.valueAsNumber)}
        />
        <Select
          placeholder='餌の種類から入力'
          data={[
            { label: 'ONE（子猫用）100g/390cal', value: '390' },
            { label: 'ELMO（子猫用）100g/422cal', value: '422' },
            { label: 'Supremo（子猫用）100g/385cal', value: '385' },
          ]}
          value={''}
          onChange={(value) => setCalorie(parseInt(value || '0', 10))}
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
            { label: '病気の猫', value: '1.00' },
            { label: 'ダイエット中の猫', value: '0.8' },
            { label: '増量中の猫', value: '1.3' },
            { label: '高齢猫', value: '1.1' },
            { label: '妊娠中', value: '2.00' },
          ]}
          value={coefficientStr}
          onChange={(value) => setCoefficient(value || '3.0')}
        />
        <SegmentedControl
          color='blue'
          defaultValue='0'
          data={[
            { label: '他フードを併用しない', value: '0' },
            { label: '他フードを併用する', value: '1' },
          ]}
          onChange={(value) => setIsOther(value as '0' | '1')}
        />
        {isOther === '1' && (
          <>
            <InputBase
              label='他フードの100gあたりのカロリー（cal）'
              type='number'
              value={otherCalorie}
              onChange={(e) => setOtherCalorie(e.target.valueAsNumber)}
            />
            <InputBase
              fz='lg'
              label='与える量（g）'
              type='number'
              value={otherAmount}
              onChange={(e) => setOtherAmount(e.target.valueAsNumber)}
            />
          </>
        )}
      </div>

      <div className='space-y-2'>
        <h2 className='text-lg'>結果</h2>
        {!weight ? (
          <div className='p-4 bg-white rounded'>体重を入力してください</div>
        ) : (
          <div>
            <h3>RER（安静時エネルギー要求量）</h3>
            <div className='text-xl font-bold'>{RER} cal</div>
            <div className='text-xs'>※ {`RER = [体重(kg)] × √0.75 × 70`}</div>
            <h3>DER（1日あたりのエネルギー要求量）</h3>
            <div className='text-xl font-bold'>{DER} cal</div>
            <div className='text-xs'>
              ※ {`DER = RER × [ライフステージ係数]`}
            </div>
            {!calorie ? (
              <div className='p-4 bg-white rounded'>
                カロリーを入力してください
              </div>
            ) : (
              <>
                <h3>1日に与えるご飯の量（g）</h3>
                <div className='text-xl font-bold'>{rice} g</div>
                <div className='text-xs'>
                  ※{' '}
                  {`[与えるご飯のカロリー量(g)] = DER ÷ [100gあたりのカロリー]`}
                </div>
                {otherCalorie && otherAmount ? (
                  <div className='text-xs'>
                    ※{' '}
                    {`100g/${otherCalorie}calのフードを${otherAmount}gを与える場合`}
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
