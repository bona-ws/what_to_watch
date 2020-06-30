const baseURL = "https://api.themoviedb.org/3";
const API_key = "8d56b9839babfd4f49817e25a3bb8609";

class FetchList {
  static getMovies() {
    return fetch(`${baseURL}/movie/popular?api_key=${API_key}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          return Promise.resolve(data.results);
        } else {
          return Promise.reject(`Fetch Failed`);
        }
      });
  }

  static searchMovie(keyword) {
    return fetch(`${baseURL}/search/movie?api_key=${API_key}&query=${keyword}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          return Promise.resolve(data.results);
        } else {
          return Promise.reject(`Fetch Failed`);
        }
      });
  }

  static searchCategory(keyword = "popular") {
    return fetch(`${baseURL}/movie/${keyword}?api_key=${API_key}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          return Promise.resolve(data.results);
        } else {
          return Promise.reject(`Fetch Failed`);
        }
      });
  }
}

export default FetchList;
