import { ADD_FAV, ADD_NAME } from "../actions/pageActions";


const initialState = {
    dogName: '',
    favs: []
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            
            return {
                ...state, dogName: action.payload
            }
            case ADD_FAV:
                return {
                    ...state, favs: [...state.favs, action.payload]
                }
        default:
            return state
    }
}


export default pageReducer