import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div>
            {/* <cavas id="canvas2"></cavas> */}
           <div className="homepage-container">
               <section className="homepage-intro"></section>
               <section className="homepage-project"></section>
               <section className="homepage-skills"></section>
               <section className="homepage-about"></section>

           
           </div>
        </div>
    )
}

export default HomePage
