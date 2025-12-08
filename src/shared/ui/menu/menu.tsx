import { MenuItem, MenuItemType } from './menu-item';

interface MenuProps {
  items: MenuItemType[];
}

export const Menu = ({ items }: MenuProps) => {
  return (
    <ul className='flex gap-2 items-center'>
      {items.map((item) => (
        <MenuItem item={item} />
      ))}
    </ul>
  );
};
