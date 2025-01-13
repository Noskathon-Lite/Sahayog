import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function EmployeeCard(prop:any) {
  return (
    <Card sx={{ height:230, width:250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={prop.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:20,textAlign:'center'}}>
            {prop.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
