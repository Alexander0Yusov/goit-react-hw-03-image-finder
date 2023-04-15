// const returnObj = { id, webformatURL, largeImageURL };
// const myKey = '34154795-6fcd5a0715506f88bd4f4189d';
// const reqStr = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

class ApiService {
  static MY_KEY = '34154795-6fcd5a0715506f88bd4f4189d';
  static URL = 'https://pixabay.com/api/?';
  #page = 1;

  constructor(query) {
    this.query = query;
  }

  request() {
    return fetch(
      `${ApiService.URL}key=${ApiService.MY_KEY}&per_page=2&page=${
        this.#page
      }&q=${this.query}`
    ).then(response => response.json());
  }
}

// export default ApiService; одинаковым стилем весь проект
export { ApiService };
