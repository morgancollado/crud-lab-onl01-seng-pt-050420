import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {
  debugger
  const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id}{...restaurant} deleteRestaurant={props.deleteRestaurant}/>)

  return(
    <div>
      {restaurants}
    </div>
  )

}

export default Restaurants;