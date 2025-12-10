import { ReactElement } from 'react'

type IconProps = {
  children: ReactElement<SVGElement>
}

export const Icon = ({ children }: IconProps) => {
  return <div className="inline-flex h-6 w-6">{children}</div>
}
