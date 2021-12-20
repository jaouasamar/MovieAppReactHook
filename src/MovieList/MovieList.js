import { Container } from 'react-bootstrap'
import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({movies,handleRemove}) => {
  
    return (
    
  

       
        <div className='container' >
            <div className='movies'>
            {movies.map((elt,index)=>
                <MovieCard handleRemove={handleRemove}  movie={elt} key={index}/>
                
                )}
            </div>
        </div>
        
      
    )
}

export default MovieList
