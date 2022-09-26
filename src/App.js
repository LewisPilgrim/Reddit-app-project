import logo from './Images/reddit-logo-svg.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import TileList from './features/TileList/TileList';
import { newSearchTerm, selectQuery } from './features/SearchTerm/searchTermSlice';


function App() {

  // const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const handleSubmit= (e) => { // Submits the query on a press of the 'Enter' key
    if (e.key === 'Enter') {
      dispatch(newSearchTerm(e.target.value));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RedditLite</h2>
        </div>
        <input name='searchBar' type='text' placeholder='Search' onKeyDown={handleSubmit}></input>
        <button className="login-button" onClick={() => alert('Login function currently not supported.')} >Login</button>
      </header>
      <section>
        <h1>{query.length > 0 ? `r/${query}` : 'Search for a subreddit to begin!'}</h1>
        <TileList data-testid='tile' className='tileList' filter={query} />
      </section>
    </div>
  );
}

export default App;
