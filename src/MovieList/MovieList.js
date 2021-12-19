import { Container } from 'react-bootstrap'
import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({movies}) => {
  
    return (
    
  

       
        <div className='movies' >
   
            {movies.map((elt,index)=>
                <MovieCard  movie={elt} key={index}/>
                
                )}
    
        </div>
        
      
    )
}

export default MovieList
