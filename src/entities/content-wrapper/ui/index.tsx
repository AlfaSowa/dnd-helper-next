import { ReactNode } from 'react';

interface ContentWrapper {
  children: ReactNode;
}

export const ContentWrapper = ({ children }: ContentWrapper) => {
  return <div className='p-2'>{children}</div>;
};
