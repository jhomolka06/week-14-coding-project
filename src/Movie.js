//#1
import React, { Component } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

class Movie extends Component {
  constructor(props) {
    super(props);
    // Initialize the state for reviews and rating
    this.state = {
      reviews: [],
      rating: 0,
    };
  }

  // Function to add a review to the movie
  addReview = (review) => {
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, review],
    }));
  };

  // Function to handle rating change
  handleRatingChange = (rating) => {
    this.setState({ rating });
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="movie">
        <h2>{movie.title}</h2>
        <img src={movie.image} alt={movie.title} />
        <p>{movie.synopsis}</p>
        <Stars rating={this.state.rating} onRatingChange={this.handleRatingChange} />
        <ReviewList reviews={this.state.reviews} />
        <ReviewForm addReview={this.addReview} />
      </div>
    );
  }
}

export default Movie;







