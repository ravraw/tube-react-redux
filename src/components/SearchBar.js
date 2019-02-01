import React, { Component } from 'react';

class SearchBar extends Component {
  // local state
  state = { search: '' };

  // updates state with search input
  onSearchHandler = e => {
    this.setState({ search: e.target.value });
  };
  // form submit
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmitHandler(this.state.search);
  };

  render(props) {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label htmlFor="searchInput">Search</label>
        <input
          id="searchInput"
          type="text"
          value={this.state.search}
          onChange={this.onSearchHandler}
        />
      </form>
    );
  }
}

export default SearchBar;
