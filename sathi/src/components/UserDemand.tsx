"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function UserDemand() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Date to arrive" variant="outlined" />
      <TextField id="outlined-basic" label="Time to arrive" variant="outlined" />
      <TextField id="outlined-basic" label="Total time to spend" variant="outlined" />
    
    </Box>
  );
}
