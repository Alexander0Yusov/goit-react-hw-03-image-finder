import { Component } from 'react';
import { ThumbDiv, Img } from './ImageItem.styled';

export class ImageItem extends Component {
  render() {
    const { demoImg, largeImg, clickHandler } = this.props;

    return (
      <ThumbDiv bgImage={'http...'}>
        <Img
          onClick={() => clickHandler(largeImg)}
          src={demoImg}
          alt="description-info"
        />
      </ThumbDiv>
    );
  }
}
