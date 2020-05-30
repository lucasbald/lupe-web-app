import React from 'react';
import TeamPage from '../TeamPage/TeamPage'
import logo from '../../assets/logo-lup3.png';
import './Home.css'

const Home = () => {
    return (
       <div>
           <div className="home-logo-section" style={{textAlign: "center"}}>
                <img src={logo} className="home-logo" alt="logo"/>
           </div>
           <TeamPage />
       </div>
    );
}
 
export default Home;