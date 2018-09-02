// Display book sub-image to page

// import React 
import React, {Component} from 'react'

// Book component
class BookList extends Component {

	// render a book (cover image, title, author)
	// need to add book-changer div / component 
	// <div key={book.id}, className="book-shelf-changer">ADD BOOK SHELF CHANGER COMPONENT HERE</div>	
	// map over each book and display certain fields
	render() {
		return ( 
			<div className='book'>
				{this.props.books.map(book => (
					<li key={book.title} className='book-title'>{book.title}</li> 		
				))}
			</div>	
		)
	}			
}

export default BookList



//<div key={book.title} className='book-top'>CHANGE THIS</div>,
//	<div key={book.title} className='book-cover' style={width: 128 height: 188 background-image='url{book.image}'}></div>