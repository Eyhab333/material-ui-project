
import ResponsiveDrawer from 'components/Drawer';
import Elevation from 'components/Paper';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <ResponsiveDrawer />
      <Elevation />
      <Outlet />
    </div>
  );
}

export default Root;
