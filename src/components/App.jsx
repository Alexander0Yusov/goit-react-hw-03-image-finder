import { Component } from 'react';
import { ApiService } from 'scripts';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    queryInput: '',
    hits: null,
    total: null,
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.setState({ queryInput: e.target.input.value });
    await this.getInfo();
  };

  getInfo = () => {
    const Api = new ApiService(this.state.queryInput);
    Api.request()
      .then(({ hits, total }) => this.setState({ hits, total }))
      .catch(er => console.log(er.message));
  };

  render() {
    const { hits, total } = this.state;

    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery hits={hits} total={total} />
      </div>
    );
  }
}