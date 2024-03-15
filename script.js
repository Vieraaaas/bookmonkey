let books = [];
const apiUrl = "http://localhost:4730/books/";
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

    if (book.favorite === false || book.favorite === undefined) {
      button.append(document.createTextNode("Add to Favorites"));
    } else {
      button.append(document.createTextNode("Remove from Favorites"));
    }

    button.id = "btn-favorites";
    button.bookObject = book;
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

list.addEventListener("click", async function (event) {
  const book = event.target.bookObject;
  if (book.favorite === true || book.favorite === undefined) {
    book.favorite = false;
    event.target.innerText = "Add to Favorites";
  } else {
    book.favorite = true;
    event.target.innerText = "Remove from Favorites";
  }

  try {
    const response = await fetch(apiUrl + book.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(book),
    });
  } catch (err) {
    console.error(err);
  }
});
