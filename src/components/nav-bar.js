class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});

    this._category = "upcoming";
  }

  connectedCallback() {
    this.render();
  }

  set movieTitle(event) {
    this.getTitle = event;
    this.render();
  }

  get title() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  set movieCategory(event) {
    this.getCategory = event;
    this.render();
  }

  get category() {
    this.shadowDOM.querySelectorAll("#menuCategory > li").forEach(item => {
      item.addEventListener("click", e => {
        this._category = e.target.textContent;
      });
    });
    return this._category;
  }

  render() {
    this.shadowDOM.innerHTML = style;
    this.shadowDOM.innerHTML += `
    <div class="brand">
      <h2>What to Watch</h2>
      <small>Find out about what you want to watch</small>
    </div>
      <ul id="menuCategory">
        <li>Now_Playing</li>
        <li>Popular</li>
        <li>Top_Rated</li>
        <li>UpComing</li>
      </ul>
      <div class="search-bar">
        <input placeholder="Search Movie Title" id="searchElement" type="search" required>
        <button id="searchButtonElement">Search</button>
      </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this.getTitle);

    this.shadowDOM.querySelectorAll("#menuCategory > li").forEach(item => {
      item.addEventListener("click", this.getCategory);
    });
  }
}

const style = `<style>
* {
    margin: 0;
    padding: 0 2rem;
}
:host {
    display: flex;
    flex: 1;
    align-items: center;
    width: 100%;
    background-color: red;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}
.brand{
  display: flex;
  align-items: center;
  text-align: center;
}
h2 {
    padding: 1rem;
}
ul{
  display: flex;
  flex: 1;
  justify-content: space-between;
  list-style-type: none;
}
li{
  cursor: pointer;
}
.search-bar{
  margin-right: 1rem;
}
.search-bar input, .search-bar button{
  padding: 0.5rem;
  border: white solid 2px;
  border-radius: 1rem;
}

@media only screen and (max-width: 1150px) {
  .brand{
    display: block;
    text-align: center;
  }
  .brand small{
    display: none;
  }
}


@media only screen and (max-width: 900px) {
  :host {
    display: block;
    width: 100%;
    text-align: center;
  }
  ul{
    width: 80vw;
    overflow-x: scroll;
    align-items: center;
  }
  li{
    width: 100%;
  }
  .search-bar{
    margin: 0;
    margin-top: 1rem;
    padding: 0;
    padding-bottom: 1rem;
    width: 100%;
    display: block;
    text-align: center;
  }
}
</style>`;

customElements.define("nav-bar", NavBar);
