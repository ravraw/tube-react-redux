import React, { Component } from 'react';
import youTube from './apis/youTube';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDisplay from './components/VideoDisplay';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  //searchResultsHandler
  searchResultsHandler = async query => {
    console.log({ query });
    const response = await youTube.get('/search', {
      params: {
        q: query
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log(this.state.videos);
  };

  //onVideoSelectHandler
  onVideoSelectHandler = video => {
    console.log({ 'Selected video': video });
    this.setState({ selectedVideo: video });
  };

  // show default
  componentDidMount = () => {
    this.searchResultsHandler('javascript');
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmitHandler={this.searchResultsHandler} />
        <VideoDisplay selectedVideo={this.state.selectedVideo} />
        <VideoList
          videoList={this.state.videos}
          onVideoSelectHandler={this.onVideoSelectHandler}
        />
      </div>
    );
  }
}

export default App;
