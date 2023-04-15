import { Component } from 'react';
import { CiSearch } from 'react-icons/ci';
// https://react-icons.github.io/react-icons/icons?name=ci

export class Searchbar extends Component {
  state = {
    queryInput: '',
  };

  handleInput = e => {
    this.setState({ queryInput: e.target.value });
  };

  render() {
    const { onSubmit } = this.props;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">
              <CiSearch className="" />
            </span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={this.state.queryInput}
            name="input"
          />
        </form>
      </header>
    );
  }
}
