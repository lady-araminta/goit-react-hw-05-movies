import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMoviesByName } from 'utils/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Btn, MoviesSection, SearchBar, SearchInput } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      setLoading(false);
      return;
    }
    if (searchQuery.trim() === '') {
      toast('Enter a search query!');
      setLoading(false);
      return;
    }
    fetchMoviesByName(searchQuery.toLowerCase().trim())
      .then(({ results, total_results }) => {
        setMovies(results);
        setLoading(false);
        if (total_results === 0) {
          setLoading(false);
          toast('Sorry, nothing was found for your search');
        }
      })
      .catch(error => {
        setLoading(false);
        return toast('Something went wrong! Please retry!');
      });
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const searchQuery = e.target.elements.search.value;
    setSearchParams(searchQuery !== '' ? { query: searchQuery.trim() } : {});
    if (searchQuery === '') {
      setLoading(false);
      toast('Enter a search query!');
      return;
    }
    e.target.reset();
  };

  return (
    <MoviesSection>
      <div>
        <SearchBar onSubmit={handleSubmit}>
          <SearchInput name="search" />
          <Btn type="submit">Search</Btn>
        </SearchBar>
      </div>
      {loading && <Loader />}
      {movies.length > 0 && !loading && <MoviesList movies={movies} />}
    </MoviesSection>
  );
};

export default Movies;
