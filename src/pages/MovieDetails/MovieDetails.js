import { fetchMovieDetails, BASE_IMAGE_URL } from 'utils/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [info, setInfo] = useState({});
  const [genreList, setGenreList] = useState([]);
  const [loading, setLoading] = useState(false);
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
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        return toast('Something went wrong! Please retry!');
      });
  }, [movieId]);

  const releaseYear = new Date(info.release_date);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      {info && !loading && (
        <>
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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;