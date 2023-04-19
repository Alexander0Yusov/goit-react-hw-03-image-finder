import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    const { onLoad } = this.props;

    return (
      <button onClick={() => onLoad()} className={css.Button} type="button">
        Load more
      </button>
    );
  }
}
