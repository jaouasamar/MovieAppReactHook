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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useNavigate}  from 'react-router-dom';
import {BrowserRouter as Router, Route,Routes,  Link } from 'react-router-dom';

import './MovieCard.css';
import ButtonBase from '@mui/material/ButtonBase';
import Info from '../Info/Info';




export default function MovieCard({movie,handleRemove}) {
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = [
    'None',
    'Delete',
    
  ];
  
  const ITEM_HEIGHT = 48;
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
 
  return (
<div>
    <Card style={{marginRight:"20px"}}>
    <CardHeader
     
      action={
        <div>
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
       <Menu
       id="long-menu"
       MenuListProps={{
         'aria-labelledby': 'long-button',
       }}
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       PaperProps={{
         style: {
           maxHeight: ITEM_HEIGHT * 4.5,
           width: '20ch',
         },
       }}
     >
       {options.map((option) => (
         <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
           
         </MenuItem>
       ))}
     </Menu>
     </div>
      }
     
    />
    <CardMedia>
{/*     
      // component="img"
      // height="150"
      // width="150"
      // image={movie.posterURL}
      // alt="Paella dish" */}
      
      <ImageButton

      focusRipple
      key={movie.title}
      style={{
        width: "100%",
      }}
    
    >
      <ImageSrc style={{ backgroundImage: `url(${movie. posterURL})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: 'relative',
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
           <Link to = {`/info/:${movie.title.toLowerCase().trim()}`}> WATCH</Link>
           
        
          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
      </Image>
    </ImageButton>
   </CardMedia>
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
      <IconButton aria-label="share">
      <DeleteOutlineIcon onClick={()=>handleRemove(movie.id)}/>
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
  
     </div>
 
  );
}


