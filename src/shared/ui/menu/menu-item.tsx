'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export type MenuItemType = {
  title: string
  path?: string
}

interface MenuItemProps {
  item: MenuItemType
  className?: string
  onClick?: () => void
}

export const MenuItem = ({ item, className, onClick }: MenuItemProps) => {
  const handleClick = () => {
    onClick?.()
  }

  if (item.path) {
    return (
      <li onClick={handleClick}>
        <Link
          className={twMerge('hover:text-amber-300 block', className)}
          href={item.path}
        >
          {item.title}
        </Link>
      </li>
    )
  }
  return <li>{item.title}</li>
}
