
import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
    const Home = () => {
      return (
        <div>
         <div className="c1">
         <div className="c2">
          <div className="c3">
         <Link className="c4" to="/about">About us</Link>
         <Link className="c4" to="/contact">Contact us</Link>
         <Link className="c4" to="/service">Service us</Link>
         </div>
         <center>
       <h1>WAREHOUSE MANAGEMENT SYSTEM </h1>
       </center>
        </div>
        </div>
        </div>
      )
    }
    
    export default Home
                