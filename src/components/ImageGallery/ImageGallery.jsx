import { Component } from 'react';
import { ImageItem } from 'components/ImageItem/ImageItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    items: 0,
  };

  render() {
    const { hits, total } = this.props;
    console.log(hits);

    return (
      <ul className={css.gallery}>
        {total &&
          hits.map(({ id, webformatURL, largeImageURL }) => (
            <li key={id}>
              <ImageItem demoImg={webformatURL} largeImg={largeImageURL} />
            </li>
          ))}
      </ul>
    );
  }
}
