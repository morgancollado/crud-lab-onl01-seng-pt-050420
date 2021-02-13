import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    name: ""
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.name)
    this.setState({
      name: ""
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
