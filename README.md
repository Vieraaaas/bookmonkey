# Bookmonkey App

You will implement a book management app called "Bookmonkey". You will do so using the provided HTML and CSS and you will write the JavaScript necessary to achieve below goals.

## API

Similar to the Todo API, the Boomonkey API will be provided via a locally running JSON Server. However, getting it set up is a little bit easier. Just use the following command and the API endpoints are up and running:

```sh
npx bookmonkey-api
```

### How to use the API endpoints

Now that your Bookmonkey API is running, visit `localhost:4730` in your browser to read the documentation on how to use the different API endpoints and have a look at the kind of data provided to you.

## Features

### Necessary

#### List all Books

Your app should list all books provided by the Bookmonkey API. Look at the `index.html`, there you will find a hard coded dummy element, so that you can get an idea about the structure and DOM elements of a single book in the list.

#### Add to Favorites

Users should be able to mark books of their liking as favorites. If a book is marked as a favorite, the according button should show "Remove from Favorites". If a book is not (yet) added to the favorites, said button should read "Add to Favorites".

#### Favorites Page

In a seperate page `favorites.html` only a user's favorited books should be shown.

### Optional

#### Single Book Page

Every book card should have a link "More Information" that leads to a single book's page where more detailed information about the book are displayed.

For this, if you haven't learned about it yet, read about `URL Search Parameters` and how to access a URL's parameters. Find a way to use this knowledge to display only a single book's details in `book.html`.

## The code

The HTML and CSS boilerplate will be provided by us. Just use those codes to get you easily set up and running with writing JavaScript.

You can find all the boilerplate code in the according files `index.html`, `favorites.html`, `book.html` and `style.css`.
