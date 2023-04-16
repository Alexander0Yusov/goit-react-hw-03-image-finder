import { Component } from 'react';
import { ThumbDiv, Img } from './ImageItem.styled';

export class ImageItem extends Component {
  render() {
    const { demoImg } = this.props;

    return (
      <ThumbDiv bgImage={'http...'}>
        <Img src={demoImg} alt="description-info" />
      </ThumbDiv>
    );
  }
}
