import "../components/movie-list.js";
import "../components/nav-bar.js";
import FetchList from "../controllers/fetch-list.js";

const main = () => {
  const searchElement = document.querySelector("nav-bar");
  const movieListElement = document.querySelector("movie-list");

  const getMovies = keyword => {
    FetchList.getMovies()
      .then(result => renderResult(result))
      .catch(error => fallbackResult(error));
  };

  const searchByTitle = async () => {
    FetchList.searchMovie(searchElement.title)
      .then(result => renderResult(result))
      .catch(error => fallbackResult(error));
  };
  searchElement.movieTitle = searchByTitle;

  const searchByCategory = async () => {
    const category = searchElement.category.toLowerCase();
    FetchList.searchCategory(category)
      .then(result => renderResult(result))
      .catch(error => fallbackResult(error));
  };
  searchElement.movieCategory = searchByCategory;

  const renderResult = result => {
    movieListElement.movies = result;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  getMovies();
};
export default main;
