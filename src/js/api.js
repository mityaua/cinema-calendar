import moment from 'moment';

const START_DAY = moment().subtract(30, 'days').format('Y-MM-D');
const CURRENT_DAY = moment().format('Y-MM-D');

const API_KEY = '249f222afb1002186f4d88b2b5418b55';

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${START_DAY}&primary_release_date.lte=${CURRENT_DAY}&language=uk-UK&sort_by=release_date.desc&region=UA`;

export default async function fetchMovies() {
  const response = await fetch(API_URL);
  const parsedResponse = await response.json();
  const movies = parsedResponse.results;

  return movies;
}
