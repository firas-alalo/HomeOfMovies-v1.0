import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function MovieCard(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          height="400"
          image={props.image}
          alt=""
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>

      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
