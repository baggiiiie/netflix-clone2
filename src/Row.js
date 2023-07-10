import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

function Row({title, fetchUrl, isLarge = false}) {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(
                    movie => (
                        ((isLarge && movie.poster_path) ||
                        (!isLarge && movie.backdrop_path)) && (
                            <img
                            className={`row_poster ${isLarge && 'row_posterLarge'}`}
                            key={movie.id}
                            src={`${baseUrl}${
                                isLarge ? movie.poster_path : movie.backdrop_path
                            }`} 
                            alt={`${movie.name}`}/> 
                        )
                    )
                )}
            </div>
        </div>
    );
}

export default Row;