import logo from './Images/reddit-logo-svg.svg';
import './App.css';

import TileList from './features/TileList/TileList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RedditLite</h2>
        </div>
        <input name='searchBar' type='text' placeholder='Search'></input>
        <button className="login-button">Login</button>
      </header>
      <section>
        <h1>Popular posts</h1>
        <TileList data-testid='tile' className='tileList' />
      </section>
    </div>
  );
}

export default App;
