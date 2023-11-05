//#1
import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    // Initialize the state for review text
    this.state = {
      reviewText: '',
    };
  }

   // Function to handle changes in the review text input
  handleReviewTextChange = (e) => {
    this.setState({ reviewText: e.target.value });
  };

  // Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    // Check if the review text is not empty
    if (this.state.reviewText.trim() !== '') {
      // Call the addReview function passed as a prop to add the review
      this.props.addReview(this.state.reviewText);
       // Clear the review text input
      this.setState({ reviewText: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.reviewText}
          onChange={this.handleReviewTextChange}
          placeholder="Write a review"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ReviewForm;


