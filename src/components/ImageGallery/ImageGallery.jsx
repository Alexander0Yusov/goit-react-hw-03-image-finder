import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    items: 0,
  };

  render() {
    const { hits, total } = this.props;
    console.log(hits);

    return (
      <ul className="gallery">
        {total && hits.map(({ id }) => <li key={id}>{id}</li>)}
      </ul>
    );
  }
}
