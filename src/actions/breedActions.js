import axios from "axios"

export const UPDATE_BREED = "UPDATE_BREED"

const getDogs = (breed) => dispatch => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random/20`)
    .then(res => {
        
        const dogs = res.data.message
        dispatch(updateBreed(dogs))
})
    .catch(err => console.error(err))
    return {
        type: "GET_DOGS", payload: {}
    }
} 

 const updateBreed = (name) => {
    
    return ({type: UPDATE_BREED, payload: name})
}
export {updateBreed, getDogs}