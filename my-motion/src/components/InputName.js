import React from 'react'
import {Link} from 'react-router-dom'
import image from './images/einstein.png'

function InputName() {
    return (
        <div>
            <div>
            <h2>What is your Name?</h2>
            <input type='text' />
            </div>
            <img src={image} alt="my image"/>
            <button><Link to='/' >Previous</Link></button>
            <button><Link to='/are-u-robot' >Next</Link></button>
        </div>
    )
}

export default InputName
