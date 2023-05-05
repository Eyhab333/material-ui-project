import { Box } from "@mui/material";
import ResponsiveDrawer from "components/Drawer";
// import Elevation from 'components/Paper';
import { Outlet } from "react-router-dom";



const drawerWidth = 240;

const Root = () => {
  return (
    <div>
      <ResponsiveDrawer />
      {/* <Elevation /> */}

      <Box
        // className="border"
        component="main"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          display: " flex",
          justifyContent: "center",
          mt: "66px",
        }}
        
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
