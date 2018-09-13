// import React libraru
import React, {Component} from 'react'
// import API
import * as BooksAPI from './BooksAPI'
// import style sheet
import './App.css'
// import components
import Shelves from './Shelf'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    arrayCurrentlyReading: [],
    arrayWantToRead: [],
    arrayRead: [],
    showSearchPage: false,
    booksWithoutUpdated: []
  }

  // method to support shelf changes
  shelfChanger = (book, shelf) => {
    this.setState((state) => ({
        // call API to update book shelf
        // returns an object
        updatedBookObject = BooksAPI.update(book, shelf)
        // console.log({updatedBookObject}) // REMOVE - FOR TESTING  - WHY DOESN'T THIS WORK?  
        // update array for the changed book
        // filter out the updated book
        booksWithoutUpdated = books.filter((book) => (book.title !== updatedBookObject.title));
        console.log(booksWithoutUpdated) // REMOVE FOR TESTING
        // add updatedBookObject to array
        books = booksWithoutUpdated.push(updatedBookObject)
        //reset state of books
        books: state.books
      }))
    }

  // make call to API - use of componentWillMount caused asynch error
  componentDidMount(){
    BooksAPI.getAll().then((books => {

      const arrayCurrentlyReading = books.filter(book => (book.shelf === "currentlyReading"))
      const arrayWantToRead = books.filter(book => (book.shelf === "wantToRead"))
      const arrayRead = books.filter(book => (book.shelf === "read"))      

      const shelfTitle1 = 'Currently Reading'
      const shelfTitle2 = 'Want To Read'
      const shelfTitle3 = "Read" 
      
      this.setState({books, arrayCurrentlyReading, arrayWantToRead, arrayRead, shelfTitle1, shelfTitle2, shelfTitle3})
      
      console.log({arrayCurrentlyReading}) /// TESTING
      console.log({arrayWantToRead}) /// TESTING
      console.log({arrayRead}) /// TESTING
    }))
  }

// Display books; pass books array to Shelf component 
// On load, Shelf component calls shelf filter functions above
// Shelf components calls Book component to display book
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
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
                <input type="text" placeholder="Search by title or author"/>
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
              <Shelves onUpdateShelf={this.shelfChanger} books={this.state.arrayCurrentlyReading} shelfTitle={this.state.shelfTitle1}/>
              <Shelves onUpdateShelf={this.shelfChanger} books={this.state.arrayToRead} shelfTitle={this.state.shelfTitle2}/>
              <Shelves onUpdateShelf={this.shelfChanger} books={this.state.arrayRead} shelfTitle={this.state.shelfTitle3}/>
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