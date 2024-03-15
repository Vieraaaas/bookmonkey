let books = [];
const apiUrl = "http://localhost:4730/books";
const list = document.querySelector("#books-list");

loadBooks();

function renderBooks() {
  list.innerText = "";
  for (const book of books) {
    const entry = document.createElement("li");
    const mainInfo = document.createElement("header");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const isbn = document.createElement("p");
    const button = document.createElement("button");
    title.append(document.createTextNode(book.title));
    author.append(document.createTextNode(book.author));
    isbn.append(document.createTextNode(book.isbn));
    button.append(document.createTextNode("Add to Favorites"));
    button.setAttribute("id", "btn-favorites");
    entry.append(mainInfo);
    mainInfo.append(title, author);
    entry.append(isbn, button);
    list.append(entry);
  }
}

async function loadBooks() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      books = data;
      renderBooks();
    }
  } catch (err) {
    console.error(err);
  }
}
