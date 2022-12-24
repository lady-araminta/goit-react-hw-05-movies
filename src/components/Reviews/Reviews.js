import { fetchMovieReviews } from 'utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Reviews = () => {
  const [dataReviews, setDataReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(({ results }) => {
        setDataReviews(results);
      })
      .catch(error => {
        return toast('Something went wrong! Please retry!');
      });
  }, [movieId]);
  if (dataReviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  } else {
    return (
      <ul>
        {dataReviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Reviews;
