import React from 'react';
import logo from '../../logo.svg';
import './GetHero.css';

const GetHero = () => {
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
    </div>
  );
}

export default GetHero;
