import { ReactNode } from 'react';

interface MainWrapperProps {
  lContent: ReactNode;
  rContent: ReactNode;
  mContent: ReactNode;
}

export const MainWrapper = ({ lContent, rContent, mContent }: MainWrapperProps) => {
  return (
    <div className='flex-1 flex'>
      <div className='bg-amber-700 w-52'>{lContent}</div>
      <div className='flex-1 bg-amber-900'>{mContent}</div>
      <div className='bg-amber-700 w-52'>{rContent}</div>
    </div>
  );
};
