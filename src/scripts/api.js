// const returnObj = { id, webformatURL, largeImageURL };
// const myKey = '34154795-6fcd5a0715506f88bd4f4189d';
// const reqStr = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

class ApiService {
  static MY_KEY = '34154795-6fcd5a0715506f88bd4f4189d';
  static URL = 'https://pixabay.com/api/?';
  #page = 1;
  #pages = 0;
  #per_page = 4;

  constructor(query) {
    this.query = query;
  }

  request() {
    const queryString = `${ApiService.URL}key=${ApiService.MY_KEY}&per_page=${
      this.#per_page
    }&page=${this.#page}&q=${this.query}`;

    return fetch(queryString).then(response => response.json());
  }

  nextPage() {
    this.#page++;
  }

  resetApi() {
    this.#page = 1;
    this.query = '';
  }

  calculatePages(totalItems) {
    if (totalItems) {
      totalItems % this.#per_page === 0
        ? (this.#pages = Math.floor(totalItems / this.#per_page))
        : (this.#pages = Math.floor(totalItems / this.#per_page) + 1);
    }
  }

  isLastPage() {
    return this.#page === this.#pages;
  }

  set pages(value) {
    this.#pages = value;
  }
  get pages() {
    return this.#pages;
  }
}

// export default ApiService; одинаковым стилем весь проект
export { ApiService };
