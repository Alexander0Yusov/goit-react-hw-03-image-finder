import { Component } from 'react';
import { ImageItem } from 'components/ImageItem/ImageItem';
import css from './ImageGallery.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    badRequest: null,
    source: [
      {
        id: '1',
        webformatURL: 'https://i.ibb.co/MSKpsNk/1466665.jpg',
        largeImageURL: 'https://i.ibb.co/MSKpsNk/1466665.jpg',
      },
      {
        id: '2',
        webformatURL: 'https://i.ibb.co/MSKpsNk/1466665.jpg',
        largeImageURL: 'https://i.ibb.co/MSKpsNk/1466665.jpg',
      },
    ],
    selectedPicture: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      setTimeout(() => this.setState({ badRequest: 'Not found' }), 1500);
    }
  }

  selectPicture = link => {
    this.setState({ selectedPicture: link });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };

  render() {
    const { hits, total } = this.props;

    return (
      <>
        <ul className={css.gallery}>
          {total
            ? hits.map(({ id, webformatURL, largeImageURL }) => (
                <li key={id}>
                  <ImageItem
                    demoImg={webformatURL}
                    largeImg={largeImageURL}
                    clickHandler={this.selectPicture}
                  />
                </li>
              ))
            : this.state.badRequest}
        </ul>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.selectedPicture} alt={'pic preview'} />
          </Modal>
        )}
      </>
    );
  }
}
