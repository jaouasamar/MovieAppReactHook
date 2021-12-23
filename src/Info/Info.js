import React from "react";
import {useParams,Link}  from 'react-router-dom';
import Button from '@mui/material/Button';
import './Info.css';
const Info = ({ movies}) => {
    let {title}=useParams();
    console.log(title.slice(1,title.length));
  return (
      movies.filter(elt=>elt.title.toLowerCase().trim() ==
        title.slice(1,title.length).toLowerCase().trim()).map(elt=>
    <div className="movie">
      <iframe
        width="816"
        height="441"
        src={elt.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{elt.description}</p>
      <Button  variant="outlined"><Link to ="/" >Back to Home</Link></Button>
    </div>
  )
  )
};

export default Info;
