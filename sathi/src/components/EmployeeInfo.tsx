"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button } from '@mui/material';
// import Link from '@mui/material';
import Link from "next/link";
export default function EmployeeInfo(prop:any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={prop.image}
          alt="green iguana"
        />
        <CardContent>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:20,display:'flex',alignItems:'center'}}>
           Name:{prop.name}
           <br/>
           Age:{prop.age}
           <br/>
           Gender:{prop.gender}
           <br/>
           Address:{prop.address}
           <br/>
           Nationality:{prop.nationality}
           <br/>
           Qualification:{prop.qualification}
          </Typography>
          
<Typography>
<Link href={'/form'}>
     <Button variant="contained">OK</Button>
</Link>
</Typography>
</div>
       </CardContent>
      </CardActionArea>
    </Card>
  );
}
