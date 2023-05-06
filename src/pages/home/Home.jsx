import { Box, IconButton, Paper, Typography } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";

const Home = () => {
  return (
    <Box sx={{ height: "100px", width: "310px" }}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: '30px',
          position: 'relative'
        }}
      >
        <Typography variant="h4">GYM</Typography>
        <Typography variant="h6">50$</Typography>
        <IconButton sx={{ position: 'absolute', right: '0', top: '0' }}>
          <Close />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Home;
