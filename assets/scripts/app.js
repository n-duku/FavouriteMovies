const addMovieModal = document.getElementById("add-modal");
const addMovie = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const modalAddMovie = document.querySelector(".btn.btn--success");
let myMovieList = [];

const renderMovies = (title, url, rating) => {
  const newMovie = document.createElement("li");
  newMovie.className = "movie-element";
  newMovie.innerHTML = `
    <div class="movie-element__image">
      <img src="${url}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
    `;
  document.getElementById("movie-list").appendChild(newMovie);
};

const removeSection = (_) => {
  if (myMovieList.length > 0) {
    document.getElementById("entry-text").style.display = "none";
  }
};

const toggleBackDrop = (_) => {
  backDrop.classList.toggle("visible");
};

const clearInputValue = (_) => {
  document.querySelector("input#title").value = "";
  document.querySelector("input#image-url").value = "";
  document.querySelector("input#rating").value = "";
};

const cancelClickAction = (_) => {
  addMovieModal.classList.toggle("visible");
  clearInputValue();
  backDrop.classList.toggle("visible");
};

const backdropClickAction = (_) => {
  addMovieModal.classList.toggle("visible");
  clearInputValue();
  backDrop.classList.toggle("visible");
};

const handleAddMovie = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

const modalAddMovieAction = (_) => {
  const movieTitle = document.querySelector("input#title").value.trim();
  const imageUrl = document.querySelector("input#image-url").value.trim();
  const rating = document.querySelector("input#rating").valueAsNumber;
  if (isNaN(rating)) {
    alert("Enter Valid Values");
  } else {
    if (movieTitle === "" || imageUrl === "" || rating > 5 || rating < 1) {
      alert("Enter Valid Values");
    } else {
      let newMovie = { title: movieTitle, url: imageUrl, rate: rating };
      myMovieList.push(newMovie);

      cancelClickAction();
      clearInputValue();
      removeSection();
      renderMovies(movieTitle, imageUrl, rating);
    }
  }
};

addMovie.addEventListener("click", handleAddMovie, false);
document
  .querySelector(".btn.btn--passive")
  .addEventListener("click", cancelClickAction, false);
backDrop.addEventListener("click", backdropClickAction);
modalAddMovie.addEventListener("click", modalAddMovieAction, false);