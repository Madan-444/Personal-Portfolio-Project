import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <div>
            <h2>What is your Name?</h2>
            <input type='text' />
            </div>
            <button><Link to='/' >Previous</Link></button>
            <button><Link to='/are-u-robot' >Next</Link></button>
        </div>
    )
}

export default HomePage
