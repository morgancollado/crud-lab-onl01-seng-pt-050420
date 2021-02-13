import React, { Component } from 'react';
import Review from './Review';

const Reviews = props => {
  const relatedReviews = props.reviews.filter(review => review.restaurantId === props.restaurantId) 
  
  const reviews = relatedReviews.map(review => <Review key={review.id} review={review} deleteReview={props.deleteReview}/>)


  return (
    <div>
      {reviews}
    </div>
  )
}

export default Reviews;