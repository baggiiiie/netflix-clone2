import React, { useEffect, useState } from 'react';
import axios from './axios';

function Row({title, fetchUrl, isLarge = false}) {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            {movies.map((movie) => {
               <img src={`${baseUrl}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                }`} alt={`${movie.name}`}/> 
            })}
        </div>
    );
}

export default Row;