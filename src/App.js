// import React libraru
import React, {Component} from 'react'
// import API
import * as BooksAPI from './BooksAPI'
// import style sheet
import './App.css'
// import components
import Shelf from './Shelf'

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
    query: ''
  }

  // make call to API on component mount
  componentDidMount() {
    BooksAPI.getAll().then((books => {
      this.setState({books})
    }))
  }

  // method to drive shelf changes (from picklist)
  shelfChanger = (book, shelf) => {
    // record the current state
    console.log("beforestate")
    console.log(this.state) // TESTING - WORKING 
    // call API to update the book's shelf (returns a promise)
    BooksAPI.update(book, shelf).then( 
      // call API to get updated books and reset state
      BooksAPI.getAll().then((books => {
        this.setState({books})
        console.log("afterstate")
        console.log(this.state) // TESTING - WORKING 
      }))
    )
  }

  // controlled component
  // call BooksAPI.search 
  // filter results based on input form
  // add Search query function
  updateQuery = (query) => {
    const search = BooksAPI.search(query)
    console.log(search)
    this.setState({query: query})
  }

// Display books; pass books array to Shelf component 
// Shelf components calls Book component to display book
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage
         ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
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
          </div> 
        )}  
        <div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
      </div>  
    )
  }
}

export default BooksApp