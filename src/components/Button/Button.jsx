import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { onLoad } = this.props;

    return (
      <button onClick={onLoad} className={css.Button} type="button">
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
