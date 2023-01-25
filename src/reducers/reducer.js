import breedReducer from "./breedReducer";
import pageReducer from "./pageReducer";
import { combineReducers } from "redux";


export const reducer = combineReducers({
    breed: breedReducer,
    page: pageReducer
})