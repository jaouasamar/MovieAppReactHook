import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import './MovieCard.css';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Button, Grid, Rating } from '@mui/material';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

import './MovieCard.css';



export default function MovieCard({movie}) {
    // console.log({elt});
  const [expanded, setExpanded] = React.useState(false);
  const [style, setStyle] = useState("grayColor");
const [like, setLike] = useState("true");
const handleExpandClick = () => {
  setExpanded(!expanded);
};
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
  const changeStyle = () => {
    console.log("you just clicked");
    setLike(!like);
    like?setStyle("grayColor"): setStyle("redColor");
    // if(like)
    // {
    //   setStyle("blackColor");
    // }
    // else{
    //   setStyle("redColor");
    // }
    
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  return (

    <Card style={{marginRight:"20px"}}>
    <CardHeader
     
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
     
    />
    <CardMedia
      component="img"
      height="194"
      image={movie.posterURL}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      {movie.title}
      </Typography>
      <Rating
      
      name="read-only" 
        value={movie.rating}
        readOnly 
        
       
      />
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <div className={style}>
        <FavoriteIcon onClick={changeStyle} />
        </div>
      
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Description:</Typography>
        <Typography paragraph>
         {movie.description}
        </Typography>
       
      </CardContent>
    </Collapse>
  </Card>
   
  );
}


