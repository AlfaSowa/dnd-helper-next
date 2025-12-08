import { CharacterType } from '../model';

interface CharacterCardProps {
  character: CharacterType;
  onClick: (character: CharacterType) => void;
}

export const CharactersCardsItem = ({ character, onClick }: CharacterCardProps) => {
  return (
    <div
      onClick={() => onClick(character)}
      className='border border-amber-100 rounded p-2 cursor-pointer hover:bg-amber-400'
    >
      <div>{character.name}</div>
    </div>
  );
};
