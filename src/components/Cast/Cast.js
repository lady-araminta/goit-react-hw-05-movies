import { fetchMovieCast, BASE_IMAGE_URL } from 'utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

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
              src={
                profile_path
                  ? `${BASE_IMAGE_URL}${profile_path}`
                  : 'https://i.imgur.com/brJrHsa.jpg'
              }
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
