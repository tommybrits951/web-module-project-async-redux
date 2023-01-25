
import Dog from "./Dog"
import { connect } from "react-redux"
import React, { useEffect } from "react"




const Doglist = (props) => {
    const {dogs} = props


    return (
        <div className="dogList">
        {dogs.map((dog, idx) => {
            return(<Dog key={idx} id={idx} src={dog}/>)
        })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
dogs: state.breed.dogs
    }
}

export default connect(mapStateToProps)(Doglist)