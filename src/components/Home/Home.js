import { fetchTrendingMovies } from 'components/utils/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTrendingMovies()
      .then(({ results }) => {
        setData(results);
      })
      .catch(error => {
        return toast('Something went wrong! Please retry!');
      });
  }, []);

  return (
    <ul>
      {data.map(item => {
        return (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
