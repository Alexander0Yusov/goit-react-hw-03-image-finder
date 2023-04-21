import { Component } from 'react';
import { ImageItem } from 'components/ImageItem/ImageItem';
import css from './ImageGallery.module.css';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    debugSource: [
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
    const { hits } = this.props;

    return (
      <>
        <ul className={css.gallery}>
          {hits.map(({ id, webformatURL, largeImageURL }) => (
            <li key={id}>
              <ImageItem
                demoImg={webformatURL}
                largeImg={largeImageURL}
                clickHandler={this.selectPicture}
              />
            </li>
          ))}
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

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};
