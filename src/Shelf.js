// Display three shelves
// Makes call to Books component to render each book on its specific shelf

// import React 
import React, {Component} from 'react'
// import components
import Books from './Books'

// Shelf component
class Shelves extends Component {
  // do not need to initialize state; get books array from app.js

  // initialize filtered arrays
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  filterArrays(books) {
    //filter array by shelf
    this.setState({currentlyReading: books.filter(book => book.shelf === "currentlyReading")})
    this.setState({wantToRead: books.filter(book => book.shelf === "wantToRead")})
    this.setState({read: books.filter(book => book.shelf === "read")})
  }

  // map over each book for that shelf to display required books
  render() { 
    filterArrays(this.state.books)

    return ( 
      <div>
        {this.props.books && currentlyReading.map((book) => (        
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Books key={book.title} title={book.title} authors={book.authors} 
                    coverImage={book.imageLinks.thumbnail} imageLinks={book.imageLinks}/>
                  </li>
                </ol>      
              </div>
          </div>  
        ))}
        {this.props.books && wantToRead.map((book) => (        
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Books key={book.title} title={book.title} authors={book.authors} 
                    coverImage={book.imageLinks.thumbnail} imageLinks={book.imageLinks}/>
                  </li>
                </ol>      
              </div>
          </div>  
        ))}
        {this.props.books && read.map((book) => (        
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Books key={book.title} title={book.title} authors={book.authors} 
                    coverImage={book.imageLinks.thumbnail} imageLinks={book.imageLinks}/>
                  </li>
                </ol>      
              </div>
          </div>  
        ))}
      </div>  
    )  
  }
}        

export default Shelves