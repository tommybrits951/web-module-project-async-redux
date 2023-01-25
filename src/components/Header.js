import { connect } from "react-redux"
import React, {useState, useEffect} from "react"
import {breedNames} from "../data"
import { getDogs} from "../actions/breedActions"

const Header = (props) => {
    const {getDogs} = props


    const changeHandle = (e) => {
        const {value} = e.target
        getDogs(value)
        
    }
    return (
        <header className="navbar">
            <button>Dog List</button>
            
            <h5>Pick A Breed!</h5>
            <select onChange={changeHandle} name="name" className="breedSel">
                <option>---- select a breed -----</option>
                {breedNames.map((name, idx) => {
                    return(
                        <option key={idx} value={name}>{name}</option>
                    )
                })}
            </select>
            
        </header>
    )

}
export default connect(null, {getDogs})(Header)