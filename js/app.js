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

  tableBody.appendChild(newRow);

}



const mainFunction = function () {
  const addBook = document.querySelector('form')
  addBook.addEventListener('submit', addNewBook)
}

document.addEventListener('DOMContentLoaded', mainFunction);
