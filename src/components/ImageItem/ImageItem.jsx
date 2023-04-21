import { Component } from 'react';
import { ThumbDiv, Img } from './ImageItem.styled';
import PropTypes from 'prop-types';

export class ImageItem extends Component {
  render() {
    const { demoImg, largeImg, clickHandler } = this.props;

    return (
      <ThumbDiv
        bgImage={'http... - опциональна передача ссылки пропсом в стили'}
      >
        <Img
          onClick={() => clickHandler(largeImg)}
          src={demoImg}
          alt="description-info"
        />
      </ThumbDiv>
    );
  }
}

ImageItem.propTypes = {
  demoImg: PropTypes.string,
  largeImg: PropTypes.string,
  clickHandler: PropTypes.func,
};
