import api from './api/api';
import movieTpl from '../templates/movie.hbs';
import infinityLoad from './components/io';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import animateEmojis from './components/emojis';

import moment from 'moment';

import { listRef, dateRef } from './references/refs';

dateRef.textContent = `оновлено ${moment()
  .locale('uk')
  .calendar()
  .toLowerCase()}`;

async function fetchAll() {
  try {
    NProgress.start();

    const movies = await api.fetchMovies();    

    const markup = movieTpl(movies);
    listRef.insertAdjacentHTML('beforeend', markup);

    if (movies.length > 0) {
      infinityLoad(fetchAll);
    }

    NProgress.done();

    animateEmojis();
  } catch (error) {
    console.log('Smth wrong with request');
    listRef.insertAdjacentHTML(
      'beforebegin',
      '<p class="error-msg">На наш сервер напали єноти. Зачекайте деякий час, поки ми їх виженемо ⏳</p>',
    );
  }
}

fetchAll();