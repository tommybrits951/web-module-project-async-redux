export const PAGE_SELECT = "PAGE_SELECT"
export const ADD_NAME = "ADD_NAME"
export const ADD_FAV = "ADD_FAV"

export const addName = (newName) => {
    return {
        type: ADD_NAME, payload: newName 
    }
}
export const addFav = (dog) => {
    return({type: ADD_FAV, payload: dog})
}

export const pageSelect = (num) => {
    return({type: PAGE_SELECT, payload: num})
}