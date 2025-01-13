"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';

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

 <Link href= {'/cost'}>
        <Button style={{display:'flex',justifyContent:'center',alignSelf:'auto'}} variant="contained" size="small">
       OK
          </Button>
 </Link>
          </div>
         
    </Box>
  );
}
