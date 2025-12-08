import { ReactNode } from 'react';

interface EntitiesGridProps<T> {
  items: T[];
  render: (element: T) => ReactNode;
}

export const EntitiesGrid = <T,>({ items, render }: EntitiesGridProps<T>) => {
  return <div className='flex'>{items.map((item) => render(item))}</div>;
};
