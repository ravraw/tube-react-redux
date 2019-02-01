import React, { Component } from 'react';
import youTube from './apis/youTube';
import './App.css';

import SearchBar from './components/SearchBar';

class App extends Component {
  //

  state = { videos: [] };

  searchResultsHandler = async query => {
    console.log({ query });
    const response = await youTube.get('/search', {
      params: {
        q: query
      }
    });
    console.log(response);
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmitHandler={this.searchResultsHandler} />
      </div>
    );
  }
}

export default App;
