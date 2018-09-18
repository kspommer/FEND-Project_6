// import React libraru
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
// import API
import * as BooksAPI from './BooksAPI'
// import style sheet
import './App.css'
// import components
import Shelf from './Shelf'
import Books from './Books'

class BooksApp extends Component {
  state = {
    books: [],
    //showSearchPage: false,
    query: [], // search query
    searchResults: [] // results of API call
  }

  // make call to API on component mount
  componentDidMount() {
    BooksAPI.getAll().then((books => {
      this.setState({books})
      console.log(books) // TESTING - REMOVE
    }))
  }

  // method to drive shelf changes (from picklist)
  shelfChanger = (book, shelf) => {
    // call API to update the book's shelf (returns a promise)
    // once update, then need to get books and reset state
    BooksAPI.update(book, shelf)
      .then(() => BooksAPI.getAll())
      .then(books => this.setState({books}))
      .catch(error => console.log(error))
      console.log(this.state.books) // TESTING 
  }

  // Search query function - controlled component (lesson 5-3-7) 
  // when user enters each character in search bar, 
  // call BooksAPI.search (returns an array)
  // Note: BooksAPI.search has limited set of search terms
  // BooksAPI.search method searches for matches in title or author
  updateQuery = (query) => {
    this.setState({query})
    console.log(query) // REMOVE - TESTING
    // call the query method (NOTE: need this. !!)
    this.runSearch(query)
  }

  // method to run search
  // add error handling for nothing entered in search bar
  // add error handing for no search results found 
  runSearch = (query) => {
    if (query) {
      BooksAPI.search(query).then(searchResults => {
        console.log(searchResults)
        if (searchResults.error) {
          searchResults = []
          this.setState({searchResults})
          console.log("No matches found")
        }
        else {
          this.setState({searchResults})
          console.log(searchResults) // REMOVE - TESTING
        }
      })
    }
  }

// Display books
// On main page, pass books array to Shelf component, then
// Shelf components calls Book component to display book
// On Search page, pass searchResults array to SearchBooks
  render() {
    return (
        <div className="app">
          <Route path="/search" render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                  />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.searchResults.map(result => {
                    // compare result.id against book.id
                    // if a match, change the result.shelf = book.shelf
                    // if no match, set to "none"
                    // need to initialize shelf to "none"
                    result.shelf = "none"
                    console.log(result) // TESTING
                    // check to see if results already has a shelf assigned, if not, assign default
                    this.state.books.map(book => (
                      book.id === result.id ? result.shelf = book.shelf : "none"
                    ))
                    // display the book - copied from Shelf.js
                    return (
                      <li key={result.id}>
                        <Books book={result} shelfChanger={this.shelfChanger}/>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          )}/>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Shelf
                  shelfChanger={this.shelfChanger}
                  books={this.state.books}
                  shelfHeader="Currently Reading"
                  shelfValue="currentlyReading"
                />
                <Shelf
                  shelfChanger={this.shelfChanger}
                  books={this.state.books}
                  shelfHeader="Want to Read"
                  shelfValue="wantToRead"
                />
                <Shelf
                  shelfChanger={this.shelfChanger}
                  books={this.state.books}
                  shelfHeader="Read"
                  shelfValue="read"
                />
              </div>
              <div className="open-search">
                <Link to="search">Add a book</Link>
              </div>
            </div>  
          )}/>
        </div>
    )
  }
}  

export default BooksApp