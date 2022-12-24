import { fetchMovieCast, BASE_IMAGE_URL } from 'utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CastItem, CastList, StarName } from './Cast.styled';

const Cast = () => {
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
    <CastList>
      {dataCast.map(({ id, name, character, profile_path }) => {
        return (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `${BASE_IMAGE_URL}${profile_path}`
                  : 'https://i.imgur.com/brJrHsa.jpg'
              }
              alt={name}
            />
            <StarName>
              <p>
                <b>{name}</b>
              </p>
              <p>
                <b>Character:</b> {character}
              </p>
            </StarName>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
