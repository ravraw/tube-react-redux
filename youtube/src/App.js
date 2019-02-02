import React, { Component } from 'react';
import youTube from './apis/youTube';
import './App.css';
import styled from 'styled-components';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDisplay from './components/VideoDisplay';

// actions
import { selectVideo, getVideos } from './actions';

// styles
const Container = styled.div`
  /* background-color: lightgray; */
  display: grid;
  grid-template-columns: 80vw 20vw;
  grid-template-rows: 5vw auto;
`;

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
      <Container>
        <SearchBar onSubmitHandler={this.searchResultsHandler} />
        <VideoDisplay selectedVideo={this.state.selectedVideo} />
        <VideoList
          videoList={this.state.videos}
          onVideoSelectHandler={this.onVideoSelectHandler}
        />
      </Container>
    );
  }
}

export default App;
