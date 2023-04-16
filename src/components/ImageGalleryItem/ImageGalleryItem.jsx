import { Component } from 'react';
import { Thumb_div } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="gallery-item">
        <Thumb_div bgImage={'http...'}>
          <img src="" alt="" />
        </Thumb_div>
      </li>
    );
  }
}
