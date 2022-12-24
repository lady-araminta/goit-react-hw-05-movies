import { fetchTrendingMovies } from 'utils/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Main, MainTitle } from './Home.styled';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies()
      .then(({ results }) => {
        setData(results);
        setLoading(false);
      })
      .catch(error => {
        setData([]);
        setLoading(false);
        return toast('Something went wrong! Please retry!');
      });
  }, []);

  return (
    <Main>
      <MainTitle>Trendings today</MainTitle>
      {loading && <Loader />}
      {data.length > 0 && !loading && <MoviesList movies={data} />}
    </Main>
  );
};

export default Home;
