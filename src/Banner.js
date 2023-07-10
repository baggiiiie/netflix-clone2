/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './Banner.css';
// import a local axios here, not global
import axios from './axios';
import requests from './Requests';

function Banner() {
  const [movie, setMovie] = useState([]);
  function truncateDescription(string, n = 150) {
    return string.length > n ? `${string.substr(0, n - 1)}...` : string;
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie)

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        // eslint-disable-next-line quotes
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">Add To List</button>
        </div>
        <h1 className="banner_description">
          {truncateDescription(`${movie?.overview}`)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;
