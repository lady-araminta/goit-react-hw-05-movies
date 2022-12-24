import { fetchMovieDetails } from 'utils/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BASE_IMAGE_URL } from 'utils/api';

export const MovieDetails = () => {
  const [info, setInfo] = useState({});
  const [genreList, setGenreList] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(info => {
        setInfo(info);
        const genreList = [];
        info.genres.forEach(({ name }) => genreList.push(name));
        setGenreList(genreList);
      })
      .catch(error => {
        return toast('Something went wrong! Please retry!');
      });
  }, [movieId]);

  const releaseYear = new Date(info.release_date);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <img
          src={
            info.poster_path
              ? `${BASE_IMAGE_URL}${info.poster_path}`
              : 'https://i.imgur.com/brJrHsa.jpg'
          }
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
          <p>{genreList.join(', ')}</p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
