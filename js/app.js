const addNewBook = function () {

  event.preventDefault();

  const noOfAttributes = this.length-1; // -1 to eliminate the submit button
  const tableBody = document.querySelector('tbody');
  if (tableBody.children.length) {tableBody.lastChild.classList.remove("last")};
  const newRow = document.createElement("tr");
  newRow.classList.add("row", "add", "last");

  const valueArray = createValueArray(this, noOfAttributes);
  const elementArray = createElementArray(valueArray);

  addElementsToRow(elementArray, newRow);
  tableBody.appendChild(newRow);
}

const createValueArray = function (array, lengthOfArray) {
  return Array.from(array).map(option => option.value).splice(0, lengthOfArray);
}

const createElementArray = function (array) {
  return array.map((value) => {
    const newElement = document.createElement("td");
    newElement.textContent = value;
    return newElement
  });
}

const addElementsToRow = function (elements, row) {
  elements.forEach((element) => {
    row.appendChild(element);
  })
}

const removeLastBook = function () {
  const tableBody = document.querySelector('tbody');
  tableBody.removeChild(tableBody.lastChild);
}

const startDeleteChain = function () {
  const deletedRow = document.querySelector('.last');
  deletedRow.classList.replace("add", "delete");

  nextRow = deletedRow.previousElementSibling

  window.setTimeout(removeLastBook, 200);

  if (nextRow) {setupNextRow(deletedRow, nextRow);}
}

const setupNextRow = function (last, secondLast) {
  last.classList.remove("last");
  secondLast.classList.add("last");
  window.setTimeout(startDeleteChain, 70);
}

const mainFunction = function () {
  const addBook = document.querySelector('form');
  addBook.addEventListener('submit', addNewBook);

  const deleteBooks = document.querySelector('button');
  deleteBooks.addEventListener('click', startDeleteChain);
}

document.addEventListener('DOMContentLoaded', mainFunction);
