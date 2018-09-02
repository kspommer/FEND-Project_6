// import React 
import React, {Component} from 'react'

// project pseudocode draft
// on start, fetchall()
// add state from last render (where stored?)
// display based on last render 
// if state != CurrentlyReading or WantToRead, assume State = Read

// if user hits +, then nav to search page
// if user searches,  the books array
// add current state for any books in the last array 

// if user changes state (arrow picklist) then render with new state

// Book component
class Books extends Component {

	// render a book (cover image, title, author)
	// need to add book-changer div / component 
	// <div key={book.id}, className="book-shelf-changer">ADD BOOK SHELF CHANGER COMPONENT HERE</div>	
	render() {
		return ( 
			<div className='book'>
				{books.map (book => (
					<div key={book.title} className='book-top'>CHANGE THIS</div>,
						<div key={book.title} className='book-cover' style={width: 128 height: 188 background-image='url{book.image}'}></div>
					<div key={book.title} className='book-title'>{book.title}</div,	
					<div key={book.title} className='book-authors'>{book.authors}</div,				
				)}
			</div>	
		)
	}			
}

export default BookList