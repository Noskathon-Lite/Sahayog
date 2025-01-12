"use client";
import React, { useState } from "react"; // React and useState for state management
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material"; // MUI components
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Icons for password visibility toggle

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
        Name:<TextField id="outlined-basic" label="Name" variant="outlined" />
        Emai:<TextField id="outlined-basic" label="Email" variant="outlined" />
        Password:<TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        </Typography>
        </Box>
        
      </Box>
    );
  }