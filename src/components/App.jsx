import { Component } from 'react';
import { Vortex } from 'react-loader-spinner';
import { ApiService } from 'scripts';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

const statusCode = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  ERROR: 'error',
  DONE: 'done',
};

export class App extends Component {
  state = {
    queryInput: '',
    hits: [],
    total: null,
    api: null,
    status: statusCode.IDLE,
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.setState({ queryInput: e.target.input.value });
    await this.getInfo();
  };

  setStatus(statusCode) {
    this.setState({ status: statusCode });
  }

  getInfo = () => {
    const Api = new ApiService(this.state.queryInput);
    this.setState({ api: Api });
    this.setStatus(statusCode.PENDING);

    Api.request()
      .then(({ hits, total }) => {
        Api.calculatePages(total);
        this.setState({ hits, total });
        this.setStatus(statusCode.RESOLVED);
      })
      .catch(er => {
        this.setStatus(statusCode.ERROR);
        console.log(er.message);
      })
      .finally(() => this.setStatus(statusCode.DONE));
  };

  getMoreInfo = () => {
    const Api = this.state.api;
    this.setStatus(statusCode.PENDING);

    Api.nextPage();
    Api.request()
      .then(({ hits }) => {
        this.setState(prev => {
          return { hits: [...prev.hits, ...hits] };
        });
        this.setStatus(statusCode.RESOLVED);
      })
      .catch(er => {
        this.setStatus(statusCode.ERROR);
        console.log(er.message);
      })
      .finally(() => this.setStatus(statusCode.DONE));
  };

  render() {
    const { hits, total, api, status } = this.state;

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
        <ImageGallery hits={hits} />

        {Boolean(status === statusCode.DONE && total && !api.isLastPage()) && (
          <Button onLoad={this.getMoreInfo} />
        )}

        {status === statusCode.PENDING && (
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

        {status === statusCode.DONE && !total && <p>Not found</p>}
      </div>
    );
  }
}

// опционален вариант: render(if-return/ if-return ...) 19-22 второе видео
