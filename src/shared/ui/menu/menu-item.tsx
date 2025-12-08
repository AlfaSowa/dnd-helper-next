import Link from 'next/link'

export type MenuItemType = {
  title: string
  path?: string
}

interface MenuItemProps {
  item: MenuItemType
}

export const MenuItem = ({ item }: MenuItemProps) => {
  if (item.path) {
    return (
      <li>
        <Link href={item.path}>{item.title}</Link>
      </li>
    )
  }
  return <li>{item.title}</li>
}
