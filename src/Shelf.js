// Display three shelves
// Makes call to Books component to render each book on its specific shelf

// import React 
import React, {Component} from 'react'
// import components
import Books from './Books'

// Shelf component
class Shelf extends Component {
  // do not need to initialize state; get books array from app.js

  //state = {
    //arrayCurrentlyReading: [],
    //arrayWantToRead: [],
    //arrayRead: [],
  //}

  // render will call this filter function 
  //filterBooks = (books) => {
    //arrayCurrentlyReading = this.props.books.filter(book => (this.props.book.shelf === "currentlyReading"))
    //arrayWantToRead = this.props.books.filter(book => (this.props.book.shelf === "wantToRead"))
    //arrayRead = this.props.books.filter(book => (this.props.book.shelf === "read"))      
  //}

  // check that books array is available
  // map over each book on that shelf to display required books
  render() { 
    //console.log({books}) // TESTING
    return ( 
      <div>
        <div>          
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfHeader}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books && this.props.books.filter(book => (book.shelf === this.props.shelfValue)).map(book => ( 
                    <li>
                      <Books book={book} shelfChanger={this.props.shelfChanger}/>
                    </li>
                  ))} 
                </ol>      
              </div>
          </div>   
        </div> 
      </div>  
    )
  }
}    

export default Shelf