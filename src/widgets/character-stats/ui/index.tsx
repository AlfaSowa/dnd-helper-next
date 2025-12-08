import { useGetCharacteristicsQuery } from '@entities/containers/characteristics';
import { CharacterStatsBlock } from '../../../entities/character-stats-block';

interface CharactersStatsProps {
  id?: string;
}

export const CharactersStats = ({ id }: CharactersStatsProps) => {
  const { data: characteristics = [] } = useGetCharacteristicsQuery();

  console.log('characteristics', characteristics);

  return (
    <div className='flex flex-col gap-4'>
      {characteristics.map((characteristic) => (
        <CharacterStatsBlock characteristic={characteristic} />
      ))}
    </div>
  );
};
