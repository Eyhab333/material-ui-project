
import ResponsiveDrawer from 'components/Drawer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <ResponsiveDrawer />

      <Outlet />
    </div>
  );
}

export default Root;
