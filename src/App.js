// import React libraru
import React, {Component} from 'react'
// import API
import * as BooksAPI from './BooksAPI'
// import style sheet
import './App.css'
// import components
import Shelf from './Shelf'
import Books from './Books'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false, 
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
    BooksAPI.update(book, shelf).then ( 
      // call API to get updated books and reset state
      BooksAPI.getAll().then((books => {
        this.setState({books})
        console.log(this.state.books) // TESTING - REMOVE
      }))
    )
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
  runSearch = (query) => {
    BooksAPI.search(query).then(searchResults => {
      this.setState({searchResults})
      console.log(searchResults) // REMOVE - TESTING
    })
  }

// Display books
// On main page, pass books array to Shelf component, then
// Shelf components calls Book component to display book
// On Search page, pass searchResults array to SearchBooks
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
                  // compare result.id against each current book.if
                  // if a match, change the result.shelf = book.shelf
                  // if no match, set to "none"
                  // need to initialize shelf to "none" 
                  result.shelf = "none"
                  console.log(result) // TESTING - REMOVE - OK HERE

                  this.state.books.map(book => (
                    book.id === result.id ? result.shelf = book.shelf : "none"     
                    // display the book - copied from Shelf.js
                  ))
                  return (
                    <li key={result.id}>
                      <Books book={result} shelfChanger={this.shelfChanger}/>
                    </li>)
                })}
              </ol>
            </div>  
          </div>  
        ) : (
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>  
        )}      
      </div>  
    )
  }
}

export default BooksApp