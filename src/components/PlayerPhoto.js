import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Player.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
  
});

export default function PlayerPhoto({ url, name }) {
  const classes = useStyles();

  return (
    <div className='card-cont'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          alt={name}
          title="Contemplative Reptile"
        />
        <CardContent className='card-content'>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Button size="small" className='wide--button' variant="outlined" color="secondary">
          Stats
        </Button>
        </CardContent>
      </CardActionArea>
  
    </div>
  );
}





