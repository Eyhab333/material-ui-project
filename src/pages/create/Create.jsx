import { Box, Button, InputAdornment, TextField } from "@mui/material";
import "./Create.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Create = () => {
  return (
    <Box
      component='form'
      sx={{
        p: "50px",
        border: "0.1px solid white",
        borderRadius: "10px",
        boxShadow: "1px 1px 8px 1px green",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        id="outlined-basic"
        label="Cost"
        variant="outlined"
      />
      <Button variant="contained" color="success" endIcon={<AddCircleIcon />}>
        Create
      </Button>
    </Box>
  );
};

export default Create;
