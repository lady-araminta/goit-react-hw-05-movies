import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMoviesByName } from 'utils/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      return;
    }
    if (searchQuery.trim() === '') {
      toast('Enter a search query!');
      return;
    }
    fetchMoviesByName(searchQuery.toLowerCase().trim())
      .then(({ results, total_results }) => {
        setMovies(results);
        if (total_results === 0) {
          toast('Sorry, nothing was found for your search');
        }
      })
      .catch(error => {
        return toast('Something went wrong! Please retry!');
      });
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    setSearchParams(searchQuery !== '' ? { query: searchQuery.trim() } : {});
    e.target.reset();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
