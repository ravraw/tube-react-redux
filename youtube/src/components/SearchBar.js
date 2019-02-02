import React, { Component } from 'react';
import styled from 'styled-components';
// styles
const Header = styled.div`
  grid-column: 1/-1;
  form {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  label {
    text-transform: uppercase;
  }
  input {
    height: 2rem;
    background: #fff;
    width: 50vw;
    border-radius: 10px;
    border: 1px solid green;
    margin: 0 1rem;
  }
`;
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
      <Header className="header">
        <form className="header__form" onSubmit={this.onSubmitHandler}>
          <label className="header__label" htmlFor="searchInput">
            Search
          </label>
          <input
            className="header__input"
            id="searchInput"
            type="text"
            value={this.state.search}
            onChange={this.onSearchHandler}
          />
        </form>
      </Header>
    );
  }
}

export default SearchBar;
