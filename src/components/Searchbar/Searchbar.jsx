import { Component } from 'react';
import css from './Searchbar.module.css';
import { CiSearch } from 'react-icons/ci';
import PropTypes from 'prop-types';
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
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={onSubmit}>
          <button className={css.SearchFormButton} type="submit">
            <CiSearch />
          </button>

          <input
            className={css.SearchFormInput}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
