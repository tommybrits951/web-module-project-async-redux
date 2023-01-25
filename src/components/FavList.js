import React from "react";
import {connect} from "react-redux"
import Doglist from "./Doglist";
const FavList = (props) => {
    const {favs, dogs} = props

    return (
        <div className="favList">
            <ul>
               {favs.map((fav, idx) => {
                   {console.log(fav)}
                return (
                    <li className="fav" key={idx}>

                        <img src={fav}/>
                    </li>
                    
                )
               })}
            </ul>
        </div>
    )

}

const mapStateToProps = (state) => {
    return({
        favs: state.page.favs,
        dogs: state.breed.dogs
    })
}
export default connect(mapStateToProps)(FavList)