import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import './GetHero.css';

const GetHero = () => {
  const [heroData, setHeroData] = useState('');
  const [heroName, setHeroName] = useState('');
  const [id, setId] = useState(1);

  useEffect(() => {
    // send HTTP request
    // save response to variable
    if (heroName == null || heroName === '') {
      return;
    }

    fetch(`https://rcvgi5q8fg.execute-api.us-east-1.amazonaws.com/prod/v1/getHero?heroName=${heroName}`)
      .then(results => results.json())
      .then(data => {
        setHeroData(data);
      });
  }, [heroName, id]); // useEffect will trigger whenever heroName is different.

  return (
    <div className="Get-hero">
      <header className="Get-hero-header">
        <img src={logo} className="Get-hero-logo" alt="logo" />
        <p>
          Edit <code>src/GetHero.js</code> and save to reload.
        </p>
        <a
          className="Get-hero-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1>Get Your Hero!</h1>
      <div>
        <input onChange={e => setId(e.target.value)}/>

        <br></br>
        <br />

        <button onClick={() => setHeroName(id)}>
         Ok
        </button>

        <br></br>
        <br />

        <pre>{heroData === '' ? '' : JSON.stringify(heroData, null, 2)}</pre>
        <p>UserId: {heroData.userId}</p>
        <p>Id: {heroData.id}</p>
        <p>Title: {heroData.title}</p>
      </div>
      
    </div>
  );
}

export default GetHero;
