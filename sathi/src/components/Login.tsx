

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function LogIn() {
  return (<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Box style={{backgroundColor:"white",display:"flex",flexDirection:"column",width:"fit-content",padding:10}}>
      <h1 style={{textAlign:"center",fontSize:"large"}}>Log In</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined" style={{marginTop:20}} />
      <TextField id="filled-basic" label="Password" variant="outlined" style={{marginTop:20}}/>
     
      <Button variant="contained" style={{marginTop:20}}>login</Button>
    </Box>
    </div>
  );
}

