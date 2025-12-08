import { Layout as LayoutAntd } from 'antd';
import { Outlet } from 'react-router-dom';

export const RoomsLayout = () => {
  return (
    <LayoutAntd style={{ minHeight: '100vh' }}>
      <div>123</div>
      <Outlet />
    </LayoutAntd>
  );
};
