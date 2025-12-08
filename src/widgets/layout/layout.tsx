import { Layout as LayoutAntd } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '../header';

export const Layout = () => {
  return (
    <LayoutAntd style={{ minHeight: '100vh' }}>
      <Header />

      <Outlet />
    </LayoutAntd>
  );
};
