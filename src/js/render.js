import { listRef, dateRef } from './references/refs';
import api from './api/api';
import movieTpl from '../templates/movie.hbs';
import infinityLoad from './components/io';
import animateEmojis from './components/emojis';
import moment from 'moment';

dateRef.textContent = `оновлено ${moment()
  .locale('uk')
  .calendar()
  .toLowerCase()}`;

async function fetchAll() {
  try {
    const movies = await api.fetchMovies();
    const markup = movieTpl(movies);

    listRef.insertAdjacentHTML('beforeend', markup);

    if (movies.length > 0) {
      infinityLoad(fetchAll);
    }

    animateEmojis();
  } catch (error) {
    console.log('Smth wrong with request');
  }
}

fetchAll();
