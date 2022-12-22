import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'components/utils/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const [info, setInfo] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setInfo)
      .catch(error => {
        return toast('Something went wrong! Please retry!');
      });
  }, [movieId]);

  const releaseYear = new Date(info.release_date);

  return (
    <div>
      <Link to="/">Go back</Link>
      <div>
        <img
          src={`${BASE_IMAGE_URL}${info.poster_path}`}
          alt={info.title}
          width="320"
        />
        <div>
          <h3>
            {info.title} ({releaseYear.getFullYear()})
          </h3>
          <p>User score:</p>
          <h5>Overview</h5>
          <p>{info.overview}</p>
          <h5>Genres</h5>
          <p></p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
