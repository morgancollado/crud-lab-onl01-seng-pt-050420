import React, { Component } from 'react';
import Review from './Review';

const Reviews = props => {
  const reviews = props.reviews.map(review => <Review key={review.id} review={review} deleteReview={props.deleteReview}/>)

  return (
    <div>
      {reviews}
    </div>
  )
}

export default Reviews;