'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function Login() {
  return (
    <Box>
        <Typography>
            LogIn
        </Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    </Box>
  );
}
