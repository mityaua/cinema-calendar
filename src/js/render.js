import movieTpl from '../templates/movie.hbs';
import fetchMovies from './api';
import animateEmojis from './emojis';
import moment from 'moment';
moment.locale('uk');

const listRef = document.querySelector('#js-list');
const dateRef = document.querySelector('.current-date');

dateRef.textContent = `афіша від ${moment().format('LLL')}`;

async function fetchAll() {
  try {
    const movies = await fetchMovies();

    const markup = movieTpl(movies);
    listRef.insertAdjacentHTML('beforeend', markup);

    animateEmojis();
  } catch (error) {
    console.log('Smth wrong with request');
  }
}

fetchAll();
