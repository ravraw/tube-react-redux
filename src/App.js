import React, { Component } from 'react';
import youTube from './apis/youTube';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

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
    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmitHandler={this.searchResultsHandler} />
        <VideoList videoList={this.state.videos} />
      </div>
    );
  }
}

export default App;
