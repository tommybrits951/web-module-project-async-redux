import React, {useState} from "react" 
import { connect } from "react-redux";
import { addName, addFav } from "../actions/pageActions";

const Dog = (props) => {

    const [typed, setTyped] = useState({
        name: '',
        turnedOn: false
    })
    const {dog, id, addName, addFav} = props;
    const change = (e) => {
        const {value} = e.target
        setTyped({...typed, name: value}) 
        console.log(typed)
    }
    const submit = (e) => {
        e.preventDefault()
        const newName = typed.name
        addName(newName)
        setTyped({...typed, name: ''})
    } 
    const turnOn = () => {
        setTyped({...typed, turnedOn: !typed.turnedOn})
    }
    const handeClick = () => {
    console.log(dog[id])
    
        addFav(dog[id])


}
    return (
        <div className="dogCard" >
            <div className="imgDiv">
                <img src={dog[id]} className="dogImg"/>
            </div>
                <form className={typed.turnedOn === true ? "show" : "hidden"}>
                    <input type='text' value={typed.name} name="dogName" onChange={change} />
                    <input type='submit' onClick={submit} value="submit" />
                
                </form>
     
            <button className="dogBtn" onClick={handeClick}>Add to Favorites</button>
            <button className="dogBtn" onClick={turnOn}>Name This Dog</button>
        </div>
    )

    
}
const mapStateToProps = (state) => {
    return {
        dog: state.breed.dogs
    }
}
export default connect(mapStateToProps, {addName, addFav})(Dog)