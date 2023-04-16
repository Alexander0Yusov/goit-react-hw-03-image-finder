import { Component } from 'react';
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
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.setState({ queryInput: e.target.input.value });
    await this.getInfo();
  };

  getInfo = () => {
    const Api = new ApiService(this.state.queryInput);
    this.setState({ api: Api });

    Api.request()
      .then(({ hits, total }) => {
        this.setState({ hits, total });
        Api.calculatePages(total);
      })
      .catch(er => console.log(er.message));
  };

  getMoreInfo = () => {
    const Api = this.state.api;
    console.log(Api.pages, '===', this.state.total);

    Api.nextPage();
    Api.request()
      .then(({ hits }) =>
        this.setState(prev => {
          return { hits: [...prev.hits, ...hits] };
        })
      )
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
        {this.state.total && !this.state.api.isLastPage() && (
          <Button onClick={this.getMoreInfo} />
        )}
      </div>
    );
  }
}
