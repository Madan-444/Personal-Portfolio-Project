import React from 'react'
import {Link} from 'react-router-dom'

function AreYouRobot() {
    return (
        <div>
            <div>
                <h2>Are you Robot?</h2>
                <input type='text' />
            </div>
            <button ><Link to='/my-intro' >Next</Link> </button>
        </div>
    )
}

export default AreYouRobot
