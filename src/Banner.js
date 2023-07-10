/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './Banner.css';
// import a local axios here, not global
// import axios from './axios';
import requests from './Requests';

function Banner() {
  const [movie, setMovie] = useState([]);
  function truncateDescription(string, n = 10) {
    return string.length > n ? `${string.substr(0, n - 1)}...` : string;
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchNetflixOriginals);
  //     setMovie(
  //       request.data.results[
  //         Math.floor(Math.random() * request.data.results.length - 1)
  //       ],
  //     );
  //     return request;
  //   }
  //   fetchData();
  // }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        // eslint-disable-next-line quotes
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Banner title</h1>
        <div className="banner_buttons">
          <button className="banner_button">Button 1</button>
          <button className="banner_button">Button 2</button>
        </div>
        <h1 className="banner_description">
          {truncateDescription('some description')}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;
