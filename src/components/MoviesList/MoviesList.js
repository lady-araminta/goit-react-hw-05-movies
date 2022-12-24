import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmInfo, List, ListItem } from './MoviesList.styled';
import { BASE_IMAGE_URL } from 'utils/api';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `${BASE_IMAGE_URL}${poster_path}`
                    : 'https://i.imgur.com/brJrHsa.jpg'
                }
                alt={title}
              />
              <FilmInfo>{title}</FilmInfo>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
