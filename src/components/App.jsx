import { Component } from 'react';
import { ApiService } from 'scripts';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    queryInput: '',
    gallery: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ queryInput: e.target.input.value });
    this.getInfo();
  };

  getInfo = () => {
    const Api = new ApiService(this.state.queryInput);
    Api.request().then(res => this.setState({ gallery: res }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery gallery={this.state.gallery} />
      </div>
    );
  }
}
