const addNewBook = function () {

  event.preventDefault();

  const title = this.title.value;
  const author = this.author.value;
  const genre = this.genre.value;
  const quantity = this.quantity.value;


  const tableBody = document.querySelector('tbody');
  const newRow = document.createElement("tr");

  const newTitle = document.createElement("td");
  newTitle.textContent = title;

  const newAuthor = document.createElement("td");
  newAuthor.textContent = author;

  const newGenre = document.createElement("td");
  newGenre.textContent = genre;

  const newQuantity = document.createElement("td");
  newQuantity.textContent = quantity;

  newRow.appendChild(newTitle);
  newRow.appendChild(newAuthor);
  newRow.appendChild(newGenre);
  newRow.appendChild(newQuantity);

  newRow.classList.add("add");
  newRow.classList.add("row");

  tableBody.appendChild(newRow);

}

const deleteAllBooks = function () {
  const tableBody = document.querySelector('tbody');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

const triggerDeleteBlur = function () {
  const tableBody = document.querySelector('tbody');
  const rowArray = Array.from(tableBody.children);

  rowArray.forEach((row) => {
    row.classList.replace("add", "delete");
  })

  window.setTimeout(deleteAllBooks, 230);

}

const mainFunction = function () {
  const addBook = document.querySelector('form');
  addBook.addEventListener('submit', addNewBook);

  const deleteBooks = document.querySelector('button');
  deleteBooks.addEventListener('click', triggerDeleteBlur);
}

document.addEventListener('DOMContentLoaded', mainFunction);
