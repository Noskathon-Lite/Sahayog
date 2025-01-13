"use client";
import React, { useState } from "react"; 
<<<<<<< HEAD
import Link from "next/link";
=======
import Link from '@mui/material/Link';


>>>>>>> b9ee5310aef56633f3e9a9f5fe2554231e8ef079
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


export default function SignUp() {
    return (
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
        noValidate
        autoComplete="off"
        style={{display:'flex',justifyContent:'center'}}
      >
        <Box style={{display:'flex',justifyContent:'center'}}>

   <div style={{display:'flex',justifyContent:'center',padding:20 ,margin:20}}>
    <div style={{textAlign:'center'}}>
        <h1>Sign-up</h1>
  

        <div  >
       <TextField id="outlined-basic" label=" First Name" variant="outlined" sx={{ mb: 2 }} />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{ mb: 2 }} />
      <TextField id="outlined-basic" label="Email" variant="outlined"  sx={{ mb: 2 }} />
      <TextField id="outlined-basic" label="Phone no." variant="outlined" sx={{ mb: 2 }}/>
     
      <TextField id="outlined-basic" label="Upload Photo." variant="outlined" sx={{ mb: 2 }}/>
      <TextField id="outlined-basic" label="Upload Citizenship Photo" variant="outlined" sx={{ mb: 2 }}/>
      <TextField id="outlined-basic" label="Upload CPR File" variant="outlined" sx={{ mb: 2 }}/>
     
      </div>
    <Typography>
      Already have an account?
    </Typography>
<<<<<<< HEAD
    <Typography>
      <Link href='/log'>
      login
      </Link>
    </Typography>
  
=======
    
   
>>>>>>> b9ee5310aef56633f3e9a9f5fe2554231e8ef079
</div>
</div>
       

        </Box>
        
      </Box>
    );
}

  

 


  



