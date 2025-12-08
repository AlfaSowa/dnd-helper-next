import { useGetClassesQuery } from '@entities/containers/classes';
import { Input, Select } from 'antd';

export const CharacterMainInformation = () => {
  const { data: classesData } = useGetClassesQuery();

  console.log('classesData', classesData);

  return (
    <div className='h-36 bg-amber-200 flex items-center px-6 gap-2'>
      <div className='size-30 bg-amber-700'>картинка</div>

      <div className='flex gap-2'>
        <div className='flex flex-col gap-2'>
          <Input prefix='Имя персонажа' className='w-60' placeholder='Имя персонажа' />
          <Input prefix='Имя игрока' className='w-60' placeholder='Имя игрока' />
        </div>

        <div className='flex flex-col gap-2'>
          <Select
            prefix='Класс'
            defaultValue='Бард'
            className='w-60'
            options={[
              { value: 'Бард', label: 'Бард' },
              { value: 'Волшебник', label: 'Волшебник' },
              { value: 'Воин', label: 'Воин' },
            ]}
          />

          <Select
            prefix='Предыстория'
            defaultValue='Аколит'
            className='w-60'
            options={[
              { value: 'Аколит', label: 'Аколит' },
              { value: 'Моряк', label: 'Моряк' },
              { value: 'Мудрец', label: 'Мудрец' },
            ]}
          />

          <Select
            prefix='Раса'
            defaultValue='Человек'
            className='w-60'
            options={[
              { value: 'Орк', label: 'Орк' },
              { value: 'Человек', label: 'Человек' },
            ]}
          />
        </div>
      </div>

      <div className='flex gap-2 items-center ml-auto'>
        <div className='size-24 bg-amber-700 flex flex-col items-center justify-center'>
          <div>Класс брони</div>
          <div>12</div>
        </div>

        <div className='size-24 bg-amber-700 flex flex-col items-center justify-center'>
          <div>Скорость</div>
          <div>30</div>
        </div>

        <div className='size-24 bg-amber-700 flex flex-col items-center justify-center'>
          <div>Инициатива</div>
          <div>9</div>
        </div>
      </div>
    </div>
  );
};
