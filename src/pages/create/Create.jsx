import { Box, Button, InputAdornment, TextField } from "@mui/material";
import "./Create.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
      component="form"
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
        onChange={(e) => setTitle(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">T</InputAdornment>,
        }}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        autoComplete="off"
      />

      <TextField
        onChange={(e) => setCost(Number(e.target.value))}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        id="outlined-basic"
        label="Cost"
        variant="outlined"
        autoComplete="none"
      />
      <Button
        onClick={() => {
          fetch(" http://localhost:3000/mydata  ", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, cost }),
          })
          .then(() => {
            navigate('/')
          })
        }}
        variant="contained"
        color="success"
        endIcon={<AddCircleIcon />}
      >
        Create
      </Button>
    </Box>
  );
};

export default Create;
