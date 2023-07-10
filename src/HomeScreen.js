/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* nav */}
      <Nav />

      {/* banner */}
      <Banner />

      {/* rows */}
      <Row />
    </div>
  );
}

export default HomeScreen;
