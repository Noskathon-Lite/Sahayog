"use client";
import React, { useState } from "react"; 
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material"; 
import { Visibility, VisibilityOff } from "@mui/icons-material"; 
import InputLabel from '@mui/material/InputLabel';

export default function SignUp() {
    return (
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <Box>
<Typography>
    <div style={{display:'flex',justifyContent:'center'}}>
        <h1>Sign-up</h1>
    </div>
        <div>
       <TextField id="outlined-basic" label=" First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Phone no." variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      
     
        </div>
        </Typography>
        </Box>
        
      </Box>
    );
}


