import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div>
            {/* <cavas id="canvas2"></cavas> */}
           <div className="homepage-container">
               {/* ********************** My intro Section ********************************************8 */}
               <section id="homepage-intro">
                   <nav className="header__main-nav">
                       <input type='checkbox' />
                       <div className="header__main-nav--hamburger"><div></div></div>
                       <div className="header__main-nav--menu">
                           <div>
                               <div>
                                   <ul>
                                       <li><a href="#">Intro</a></li>
                                       <li><a href="#">Projects</a></li>
                                       <li><a href="#">Skills</a></li>
                                       <li><a href="#">Resume</a></li>
                                       <li><a href="#">My Notes</a></li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </nav>
               </section>
                 {/* ********************** My project showcase Section ********************************************8 */}
               <section id="homepage-projects">Projects</section>
                 {/* ********************** My skills Section ********************************************8 */}
               <section id="homepage-skills">Skills</section>
                 {/* ********************** My resume Section ********************************************8 */}
               <section id="homepage-resume">Resume</section>
                {/* ********************** My resume Section ********************************************8 */}
               <section id="homepage-notes">My Notes</section>

           
           </div>
        </div>
    )
}

export default HomePage
