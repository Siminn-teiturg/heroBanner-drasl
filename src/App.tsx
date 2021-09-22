import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroBanner from './HeroBanners';

export interface IHeroBannerProps {
    heroBanner: {
        title: string;
        description: string;
    }[]
  }

function App() {
  const heroBanner = [
      {
        "title": "1",
        "description": "Leanne Graham",
      },
      {
        "title": "2",
        "description": "Ervin Howell",
      }
  ]
  const Data2 = {
    "title": "1",
    "description": "Leanne Graham",
  };  

  return (
    <div className="App">
      <HeroBanner heroBanner={heroBanner} />
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
