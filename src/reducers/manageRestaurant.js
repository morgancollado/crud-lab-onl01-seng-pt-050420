import cuid from 'cuid';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer

function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                text: action.name
            }
            return {restaurants: state.restaurants.concat(restaurant)}
        case "DELETE_RESTAURANT":
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    }

}

function manageReviews(state ={
    reviews: []
}, action){

}