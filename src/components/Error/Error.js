import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/logo-lup3.png';
import './Error.css'

const Error = () => {
    return (
       <div>
            <br />
            <div className="error-404-section" style={{textAlign: "center"}}>
               <h3>404 - Page not found</h3>
               <img src={PageNotFound} className="error-logo" alt="Error 404 page" />
            </div>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
       </div>
    );
}
 
export default Error;