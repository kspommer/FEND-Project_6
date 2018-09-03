// Display three shelves

// import React 
import React, {Component} from 'react'
// import components
import BookList from './Books'

// Shelf component
class Shelves extends Component {

  getShelf(book) {
    let shelf = ''

    (this.book.readingModes.shelf === 'currentlyReading' ? shelf="Currently Reading" : 
      (this.book.readingModes.shelf === 'wantToRead' ? shelf="Want to Read" : 
        (this.book.readingModes.shelf === 'read' ? shelf="Read" : null)))
  }

// map over each book and figure out what shelf they are on
  render() {
    return (
      <div className="need to add here"> 
        {this.props.books.map(book => (
          <div key={book.id} className="bookshelf"> 
            <h2 className="bookshelf-title">getShelf(book)</h2>
            <div className="bookshelf-books">
              <BookList/>
            </div>   
          </div>
        ))} 
      </div>     
    )
  }      
}

export default Shelves