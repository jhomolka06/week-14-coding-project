
import React from 'react';

const Stars = ({ rating, onRatingChange }) => {
  // An array to represent the five stars
  const starArray = [1, 2, 3, 4, 5];
  return (
    <div>
        {starArray.map((star) => ( //Map through the starArray and render each star
        <span
          key={star}
          className={star <= rating ? 'star active' : 'star'}
          onClick={() => onRatingChange(star)} // Call the onRatingChange function with the clicked star value
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;




