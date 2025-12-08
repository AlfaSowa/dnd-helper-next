import { Link } from 'react-router-dom';
import { Character } from '../../../shared/api/data-contracts';

interface EntitiesGridCardProps {
  to: string;
  entity: Character;
}

export const EntitiesGridCard = ({ entity, to }: EntitiesGridCardProps) => {
  return (
    <div className='relative bg-amber-100 flex flex-col'>
      <div className='flex'>
        <div className='flex-1 p-2flex flex-col gap-2 p-2'>
          <div className='text-[1.2rem]'>Альфредо</div>
          <div>Человек</div>
          <div>Колдун</div>
        </div>

        <div className='w-25 h-60 bg-amber-600'>
          <img
            src='https://lss-s3-files.s3.eu-north-1.amazonaws.com/avatar/679496dfc29a9772ae4cd19e.webp?mod=1737795120322'
            alt='123'
          />
        </div>
      </div>

      <div className='bg-amber-800 p-4'>
        <Link to={to}>
          <div>{entity.name}</div>
        </Link>
      </div>
    </div>
  );
};
