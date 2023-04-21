import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalEl = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKeydown);
  }

  handlerKeydown = ev => {
    if (ev.code === 'Escape') {
      this.props.onClose();
    }
  };

  handlerBackdropClick = ev => {
    if (ev.target === ev.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div onClick={this.handlerBackdropClick} className={css.Overlay}>
        <div className={css.Modal}>{children}</div>
      </div>,
      modalEl
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};
