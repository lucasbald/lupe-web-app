import React from 'react';
import TeamPage from '../TeamPage/TeamPage'
import logo from '../../assets/logo-lup3.png';
import './Home.css'

const Home = () => {
    return (
       <div>
           < br/>
           <div className="home-logo-section" style={{textAlign: "center"}}>
                <img src={logo} className="home-logo" alt="logo"/>
           </div>
           < br/>
           <TeamPage />
       </div>
    );
}
 
export default Home;