import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button onClick={() => onClick()} className={css.Button} type="button">
        Load more
      </button>
    );
  }
}
