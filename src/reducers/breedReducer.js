import { UPDATE_BREED } from "../actions/breedActions"
import { breedNames } from "../data"


const initialState = {
    dogs: []
}
export const breedReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_BREED:
            
        return({...state, dogs: action.payload})
        default:
            return state
            }
}

export default breedReducer