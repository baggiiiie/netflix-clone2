/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
