import { Component } from 'react';
import { Vortex } from 'react-loader-spinner';
import { ApiService } from 'scripts';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    queryInput: '',
    hits: [],
    total: null,
    api: null,
    isLoading: false,
  };

  setLoading(bool) {
    this.setState({ isLoading: bool });
  }

  handleSubmit = async e => {
    e.preventDefault();
    await this.setState({ queryInput: e.target.input.value });
    await this.getInfo();
  };

  getInfo = () => {
    const Api = new ApiService(this.state.queryInput);
    this.setState({ api: Api });
    this.setLoading(true);

    Api.request()
      .then(({ hits, total }) => {
        this.setState({ hits, total });
        Api.calculatePages(total);
        this.setLoading(false);
      })
      .catch(er => console.log(er.message))
      .finally();
  };

  getMoreInfo = () => {
    const Api = this.state.api;
    this.setLoading(true);

    Api.nextPage();
    Api.request()
      .then(({ hits }) => {
        this.setState(prev => {
          return { hits: [...prev.hits, ...hits] };
        });
        this.setLoading(false);
      })
      .catch(er => console.log(er.message))
      .finally();
  };

  render() {
    const { hits, total, api, isLoading } = this.state;

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

        {total && !isLoading && !api.isLastPage() && (
          <Button onClick={this.getMoreInfo} />
        )}

        {isLoading && (
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        )}
      </div>
    );
  }
}
