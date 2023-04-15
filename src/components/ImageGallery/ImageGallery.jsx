import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    items: 0,
  };

  render() {
    const { gallery } = this.props;

    return (
      <ul className="gallery">
        {gallery.map((item, index) => (
          <li>{index}</li>
        ))}
      </ul>
    );
  }
}
