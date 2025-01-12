"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UserDemand() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
      <div >
        Date to arrive<TextField id="outlined-basic" label="" variant="outlined" />
        Time to arrive<TextField id="outlined-basic" label="" variant="outlined" />
        Total time to spend<TextField id="outlined-basic" label="" variant="outlined" />
        <Button/> 
    </div>

 
        <Button style={{display:'flex',justifyContent:'center'}} variant="contained" size="small">
       OK
          </Button>
          </div>
         
    </Box>
  );
}
