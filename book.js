const apiUrl = "http://localhost:4730/books/";
const bookUrl = new URL(window.location.href);
const id = bookUrl.searchParams.get("id");
let book = {};

loadBook();

async function loadBook() {
  try {
    const response = await fetch(apiUrl + id);
    if (response.ok) {
      const data = await response.json();
      book = data;
      console.log(book);
      renderBook();
    }
  } catch (err) {
    console.error(err);
  }
}

function renderBook() {
  const title = document.querySelector("#book-title");
  const author = document.querySelector("#book-author");
  const isbn = document.querySelector("#book-isbn");
  const description = document.querySelector(".book-description");
  const picture = document.querySelector("#img-book-cover");
  title.innerText = book.title;
  author.innerText = book.author;
  isbn.innerText = book.isbn;
  description.innerText = book.abstract;
  picture.src = book.cover;
}
