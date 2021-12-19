import { Rating } from '@mui/material';
import React, { useState } from 'react';
import './RatingComponent.css'

const RatingComponent = ({rate,handleRating}) => {
   
    
    return (
        <div className="rate"  >
        <Rating 
        name="simple-controlled"
        value={rate}
        onChange={handleRating}
        style={{margin:"0 auto"}}
      />
        </div>
    )
}

export default RatingComponent
