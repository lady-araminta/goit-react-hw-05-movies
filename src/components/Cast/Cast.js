import { fetchMovieCast } from 'components/utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const Cast = () => {
  const [dataCast, setDataCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        setDataCast(cast);
      })
      .catch(error => {
        return toast('Something went wrong! Please retry!');
      });
  }, [movieId]);

  return (
    <ul>
      {dataCast.map(({ id, name, character, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={`${BASE_IMAGE_URL}${profile_path}`}
              alt={name}
              width="96"
            />
            <div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
