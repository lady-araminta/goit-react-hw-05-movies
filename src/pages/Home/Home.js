import { fetchTrendingMovies } from 'utils/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTrendingMovies()
      .then(({ results }) => {
        setData(results);
      })
      .catch(error => {
        setData([]);
        return toast('Something went wrong! Please retry!');
      });
  }, []);

  return (
    <section>
      <h2>Trendings today</h2>
      {data.length > 0 && <MoviesList movies={data} />}
    </section>
  );
};
