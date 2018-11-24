const addNewBook = function () {

  event.preventDefault();

  const title = this['title'].value;
  const author = this.author.value;
  const genreArray = Array.from(this.genre).filter(option => option.selected).map(option => option.value);
  const quantity = this.quantity.value;


  const tableBody = document.querySelector('tbody');
  const newRow = document.createElement("tr");

  const newTitle = document.createElement("td");
  newTitle.textContent = title;

  const newAuthor = document.createElement("td");
  newAuthor.textContent = author;

  const newGenre = document.createElement("td");
  addGenreElements(newGenre, genreArray);

  const newQuantity = document.createElement("td");
  newQuantity.textContent = quantity;

  newRow.appendChild(newTitle);
  newRow.appendChild(newAuthor);
  newRow.appendChild(newGenre);
  newRow.appendChild(newQuantity);

  newRow.classList.add("delete");

  tableBody.appendChild(newRow);

}

const addGenreElements = function (newGenre, genreArray) {

  const addLineBreak = document.createElement("br")

  genreArray.forEach((genre) => {
    const addGenre = document.createElement("p");
    addGenre.textContent = genre;

    newGenre.appendChild(addGenre);
    // newGenre.appendChild(addLineBreak)
  })
}

const mainFunction = function () {
  const addBook = document.querySelector('form')
  addBook.addEventListener('submit', addNewBook)
}

document.addEventListener('DOMContentLoaded', mainFunction);
