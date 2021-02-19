import moment from 'moment';

const START_DAY = moment().subtract(30, 'days').format('Y-MM-D');
const CURRENT_DAY = moment().format('Y-MM-D');
const WEEK_LATER = moment().add(7, 'days').format('Y-MM-D');
const URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '249f222afb1002186f4d88b2b5418b55';

export default {
  page: 1,

  async fetchMovies() {
  const response = await fetch(
    `${URL}?api_key=${API_KEY}&release_date.gte=${START_DAY}&release_date.lte=${WEEK_LATER}&language=uk-UK&region=UA&sort_by=release_date.desc&page=${this.page}`,
  );
  const parsedResponse = await response.json();
  const movies = parsedResponse.results;
  
  this.incrementPage();
    
  return movies;
  },

  incrementPage() {
    this.page += 1;
  },
};