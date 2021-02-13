import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: "ADD_REVIEW", text, restaurantId}),
  deleteReview: (id, restaurantId) => dispatch({type: "DELETE_REVIEW", id, restaurantId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
