import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Row.css';

function Row({ title, fetchUrl, isLarge = false }) {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h3 className='row_title'>{title}</h3>
            <div className='row_posters'>
                {movies.map(
                    movie => (
                        ((isLarge && movie.poster_path) ||
                            (!isLarge && movie.backdrop_path)) && (
                            <div
                                key={movie.id}
                                className={`row_poster ${ isLarge && 'row_posterLarge' }`}>
                                <img
                                    className='row_posterLogo'
                                    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                                />
                                <img
                                    className='row_posterPic'
                                    src={`${ baseUrl }${ isLarge ? movie.poster_path : movie.backdrop_path
                                        }`}
                                    alt={`${ movie.name }`} />
                            </div>

                        )
                    )
                )}
            </div>
        </div>
    );
}

export default Row;