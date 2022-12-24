import { fetchMovieDetails, BASE_IMAGE_URL } from 'utils/api';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import {
  Additionally,
  AdditLink,
  BackLink,
  Description,
  DescriptionItem,
  DetailsSection,
  FilmCard,
} from './MovieDetails.styled';

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
    <DetailsSection>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {info && !loading && (
        <>
          <FilmCard>
            <img
              src={
                info.poster_path
                  ? `${BASE_IMAGE_URL}${info.poster_path}`
                  : 'https://i.imgur.com/brJrHsa.jpg'
              }
              alt={info.title}
              width="320"
            />
            <Description>
              <DescriptionItem>
                <h3>
                  {info.title} ({releaseYear.getFullYear()})
                </h3>
              </DescriptionItem>
              <DescriptionItem>
                <h5>User score:</h5>
                <p>
                  {info.vote_average}/{info.vote_count}
                </p>
              </DescriptionItem>
              <DescriptionItem>
                <h5>Overview</h5>
                <p>{info.overview}</p>
              </DescriptionItem>
              <DescriptionItem>
                <h5>Genres</h5>
                <p>{genreList.join(', ')}</p>
              </DescriptionItem>
            </Description>
          </FilmCard>
          <Additionally>
            <li>
              <AdditLink to="cast" state={{ from: backLinkHref }}>
                Cast
              </AdditLink>
            </li>
            <li>
              <AdditLink to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </AdditLink>
            </li>
          </Additionally>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </DetailsSection>
  );
};

export default MovieDetails;
