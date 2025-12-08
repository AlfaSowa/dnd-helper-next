import { Character } from '../../../shared/api/data-contracts';
import { CharactersCardsItem } from './card';

interface CharactersCardsProps {
  list: Array<Character>;
  setIsModalOpen: (value: boolean) => void;
}

export const CharactersCardsList = ({ list, setIsModalOpen }: CharactersCardsProps) => {
  return (
    <>
      <div className='flex flex-col gap-2 p-2'>
        <button onClick={() => setIsModalOpen(true)}>ДОБАВИТЬ ПЕРСОНАЖА</button>

        {list.map((e) => (
          <CharactersCardsItem character={e} key={e.id} onClick={() => console.log(1)} />
        ))}
      </div>
    </>
  );
};
