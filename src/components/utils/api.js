const API_KEY = 'b59a60e3d4b462ae9c6c6d62e7fdcb56';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong! Please retry'));
    }
  );
};

export const fetchMoviesByName = () => {};

export const fetchMovieDetails = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong! Please retry'));
    }
  );
};

export const fetchMovieCast = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong! Please retry'));
    }
  );
};

export const fetchMovieReviews = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong! Please retry'));
    }
  );
};

export const fetchGenres = () => {};
