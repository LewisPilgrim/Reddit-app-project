import logo from './Images/reddit-logo-svg.svg';
import './App.css';
import { useState } from 'react';

import TileList from './features/TileList/TileList';


function App() {

  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RedditLite</h2>
        </div>
        <input name='searchBar' type='text' placeholder='Search' onChange={event => setQuery(event.target.value)}></input>
        <button className="login-button" onClick={() => alert('Login function currently not supported.')} >Login</button>
      </header>
      <section>
        <h1>Popular posts</h1>
        <TileList data-testid='tile' className='tileList' filter={query} />
      </section>
    </div>
  );
}

export default App;
