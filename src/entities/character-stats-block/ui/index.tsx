import { InputNumber, InputNumberProps } from 'antd';
import { CharacterStatsBox } from '../../../features/character-stats-box';
import { Characteristic } from '../../../shared/api/data-contracts';

type ItemType = {
  value: number;
  title: string;
};

interface CharacterStatsGridProps {
  characteristic: Characteristic;
}

export const CharacterStatsBlock = ({ characteristic }: CharacterStatsGridProps) => {
  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

  return (
    <div>
      <div className='flex items-center justify-between bg-amber-600 p-1'>
        <span className='text-2xl'>{characteristic.name}</span>

        <InputNumber defaultValue={10} onChange={onChange} />
      </div>

      {characteristic.abilities.length > 0 && (
        <div className='flex flex-col bg-amber-400 p-1 '>
          {characteristic.abilities.map((ability) => (
            <CharacterStatsBox ability={ability} />
          ))}
        </div>
      )}
    </div>
  );
};
