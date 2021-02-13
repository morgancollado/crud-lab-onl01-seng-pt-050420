import cuid from 'cuid';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer

function manageRestaurants(state = [], action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                text: action.name
            }
            return state.concat(restaurant)
        case "DELETE_RESTAURANT":
            const restaurants = state.filter(restaurant => restaurant.id != action.id)
            return {...state, restaurants}

        default: 
            return state
    }
}

function manageReviews(state = [], action){
    switch(action.type){
        default: 
        return state
    }
}