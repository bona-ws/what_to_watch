class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `        
        <div class="card">
            <img width="100%" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
              this._movie.poster_path
            }" alt="Movie Poster">
            <div class="card-body">
                <h5>
                  ${this._movie.title}
                  <small>(${this._movie.release_date.substr(0, 4)})</small>
                </h5>
                <p>${this._movie.overview}</p>
                <p></p>
            </div>
            <div class="card-footer">
                User Rating : ${this._movie.vote_average}/10  
                <meter value="${this._movie.vote_average}" min="0" max="10" />
            </div>
        </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);
