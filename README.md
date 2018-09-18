# MyReads Project

This project was built on Udacity starter template starter code.  
The student added the React components and additional code to enable the user to : 
- Change the shelf of a book on the main page 
- Navigate to a search page and search for a book based on title or author
- Add a book found in the search to a shelf 
- View in the URL bar when they changed pages

To run the project: 
* clone the project
* navigate to the project directory
* install all project dependencies:   `npm install`
* start the development server:   `npm start`

Note:  Only certain search terms are functional.  See SEARCH_TERMS.md

## Special thanks 
To classmates Forrest and Jason Tracy for saving my project from my brain very scrambled by React. 
To endless stackoverflow and additional training resources for helping me understand what the course did not 

## Degree of Difficulty
12/10

## Files provided the student
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server
Udacity provided the backend server.
The provided file src/BooksAPI.js contains three methods required by the program:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`
Method Signature:  getAll()
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`
Method Signature:  
update(book, shelf)
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`
Method Signature:  search(query)
* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search pag