import { LIFE_STAGE_OPTIONS, LIFE_STAGE_VALUES } from '@/constants';
import { LifeStageOptionKey } from '@/types';
import { Button, InputBase, Modal, Select } from '@mantine/core';
import { useListState, useSetState } from '@mantine/hooks';
import { useMemo, useState } from 'react';

export default function CatCalculator() {
  const [calculated, setCalculated] = useState(false);
  const [openFormula, setOpenFormula] = useState(false);

  const [values, setValues] = useSetState<{
    weight: number;
    calorie: number;
    lifeStage: LifeStageOptionKey;
  }>({
    weight: 0,
    calorie: 0,
    lifeStage: 'kitten-4-6',
  });
  const [otherFoods, otherFoodsHandlers] = useListState<{
    calorie: number;
    amount: number;
  }>([]);

  const RER = useMemo(() => {
    const weight = values.weight / 1000;
    const result100 = weight ** 0.75 * 70 * 100;
    const rounded = Math.round(result100);

    return rounded / 100;
  }, [values.weight]);

  const DER = useMemo(() => {
    const coefficient = LIFE_STAGE_VALUES[values.lifeStage];
    const result100 = RER * coefficient * 100;
    const rounded = Math.round(result100);

    return rounded / 100;
  }, [RER, values.lifeStage]);

  const rice = useMemo(() => {
    const perGram = values.calorie / 100;
    const totalOthersCalorie =
      otherFoods.length > 0
        ? otherFoods.reduce(
            (acc, food) => acc + (food.calorie / 100) * food.amount,
            0,
          )
        : 0;
    const calPerDay = DER - (totalOthersCalorie ? totalOthersCalorie : 0);
    const result100 = (calPerDay / perGram) * 100;
    const rounded = Math.round(result100);

    return rounded / 100;
  }, [DER, values.calorie, otherFoods]);

  return (
    <div className='bg-white rounded p-6'>
      {!calculated ? (
        <div className='space-y-2 w-60 mx-auto'>
          <h2 className='text-base font-normal text-center leading-loose'>
            猫が1日に必要な
            <br />
            摂取カロリー量を簡単に計算。
          </h2>
          <InputBase
            fz='lg'
            label='体重（g）'
            type='number'
            value={values.weight}
            onChange={(e) => setValues({ weight: e.target.valueAsNumber })}
          />
          <h3 className='text-sm'>メインフード</h3>
          <InputBase
            label='100gあたりのカロリー（cal）'
            type='number'
            value={values.calorie}
            onChange={(e) => setValues({ calorie: e.target.valueAsNumber })}
          />
          <Select
            placeholder='餌の種類から入力'
            data={[
              { label: 'ONE（子猫用）100g/390cal', value: '390' },
              { label: 'ELMO（子猫用）100g/422cal', value: '422' },
              { label: 'Supremo（子猫用）100g/385cal', value: '385' },
            ]}
            value={''}
            onChange={(value) =>
              setValues({ calorie: parseInt(value || '0', 10) })
            }
          />
          <Select
            label='ライフステージ'
            data={LIFE_STAGE_OPTIONS}
            value={values.lifeStage}
            onChange={(value) =>
              setValues({ lifeStage: value as LifeStageOptionKey })
            }
          />
          {otherFoods.length > 0 && (
            <h3 className='text-sm'>サブフード（ウェットフードなど）</h3>
          )}
          {otherFoods.map((food, index) => (
            <div key={index} className='space-y-2 relative'>
              <InputBase
                label='100gあたりのカロリー（cal）'
                type='number'
                value={food.calorie}
                onChange={(e) =>
                  otherFoodsHandlers.setItemProp(
                    index,
                    'calorie',
                    e.target.valueAsNumber,
                  )
                }
              />
              <InputBase
                fz='lg'
                label='与える量（g）'
                type='number'
                value={food.amount}
                onChange={(e) =>
                  otherFoodsHandlers.setItemProp(
                    index,
                    'amount',
                    e.target.valueAsNumber,
                  )
                }
              />
              <div className='text-right'>
                <Button
                  size='xs'
                  color='gray'
                  onClick={() => otherFoodsHandlers.remove(index)}
                >
                  削除
                </Button>
              </div>
              <hr />
            </div>
          ))}
          <Button
            variant='outline'
            color='pink'
            size='xs'
            fullWidth
            onClick={() =>
              otherFoodsHandlers.append({
                calorie: 0,
                amount: 0,
              })
            }
          >
            サブフードの追加
          </Button>
          <div>
            <Button
              className='w-36 mx-auto block mt-12'
              color='pink'
              disabled={isNaN(rice)}
              onClick={() => setCalculated(true)}
            >
              結果を見る
            </Button>
          </div>
        </div>
      ) : (
        <div className='space-y-2 w-60 mx-auto'>
          <h2 className='text-base font-normal text-center leading-loose'>
            結果
          </h2>
          <div className='space-y-4'>
            <div>
              <div className='font-bold text-sm'>
                RER（安静時エネルギー要求量）
              </div>
              <div className='text-xl font-bold bg-rose-200 py-3 px-4'>
                {RER} cal
              </div>
              <div className='text-xs mt-1'>
                ※ {`RER = [体重(kg)] × √0.75 × 70`}
              </div>
            </div>
            <div>
              <div className='font-bold text-sm break-keep whitespace-pre-wrap'>
                DER
                <wbr />
                （1日あたりのエネルギー要求量）
              </div>
              <div className='text-xl font-bold bg-rose-200 py-3 px-4'>
                {DER} cal
              </div>
              <div className='text-xs mt-1'>
                ※ {`DER = RER × [ライフステージ係数]`}
              </div>
            </div>
            <div>
              <div className='font-bold text-sm'>1日に与えるご飯の量（g）</div>
              <div className='text-xl font-bold bg-rose-200 py-3 px-4'>
                {rice} g
              </div>
              {otherFoods.length > 0 ? (
                <div className='text-xs mt-1'>
                  ※{' '}
                  {`[与えるご飯のカロリー量(g)] = (DER - [サブフードのカロリー]) ÷ [100gあたりのカロリー]`}
                </div>
              ) : (
                <div className='text-xs mt-1'>
                  ※{' '}
                  {`[与えるご飯のカロリー量(g)] = DER ÷ [100gあたりのカロリー]`}
                </div>
              )}
            </div>
          </div>
          <div>
            <Button
              className='w-36 mx-auto block mt-12'
              color='pink'
              onClick={() => setCalculated(false)}
            >
              再度計算する
            </Button>
          </div>
        </div>
      )}

      <Button
        className='w-36 mx-auto block mt-2'
        variant='outline'
        color='pink'
        onClick={() => setOpenFormula(true)}
      >
        計算式の確認
      </Button>

      <Modal
        title='計算式の確認'
        centered
        size='auto'
        opened={openFormula}
        onClose={() => setOpenFormula(false)}
      >
        <div className='w-72'>
          <div className='text-xs'>
            {`RER = ${values.weight} ÷ 1000 × √0.75 × 70 = ${RER} [cal]`}
          </div>
          <br />
          <div className='text-xs'>
            {`DER = ${RER} × ${
              LIFE_STAGE_VALUES[values.lifeStage]
            } = ${DER} [cal]`}
          </div>
          <br />
          {otherFoods.length > 0 ? (
            <div className='text-xs'>
              {`[与えるご飯のカロリー量(g)] = (${DER} - (${otherFoods
                .map((food) => `(${food.calorie} / 100) * ${food.amount}`)
                .join(' + ')})) ÷ (${values.calorie} × 100) = ${rice} [g]`}
            </div>
          ) : (
            <div className='text-xs'>
              {`[与えるご飯のカロリー量(g)] = ${DER} ÷ (${values.calorie} × 100) = ${rice} [g]`}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
