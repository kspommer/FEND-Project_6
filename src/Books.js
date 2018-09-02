// Display book sub-image to page

// import React 
import React, {Component} from 'react'

// Book component
class Books extends Component {

	// render a book (cover image, title, author)
	// need to add book-changer div / component 
	// <div key={book.id}, className="book-shelf-changer">ADD BOOK SHELF CHANGER COMPONENT HERE</div>	
	render() {
		console.log('Props, this.props') // TEST
		return ( 
			<div className='book'>
			// map over each book and display certain fields
				{books.map (book => (
					<div key={book.title} className='book-title'>{book.title}</div>,
					<div key={book.title} className='book-authors'>{book.authors}</div>				
				))}
			</div>	
		)
	}			
}

export default Books



//<div key={book.title} className='book-top'>CHANGE THIS</div>,
//	<div key={book.title} className='book-cover' style={width: 128 height: 188 background-image='url{book.image}'}></div>