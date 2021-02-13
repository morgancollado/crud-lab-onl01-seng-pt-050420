import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ""
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.text} onChange={this.onChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
