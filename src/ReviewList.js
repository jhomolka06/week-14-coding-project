
import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review, index) => (  //Map through the reviews array and render each review using the Review component
        <Review key={index} text={review} />
      ))}
    </div>
  );
};

export default ReviewList;





