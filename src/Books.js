// Display book image, title, author to page

// import React 
import React, {Component} from 'react'

// Book component  - displays thumbnail image, title, authors(NEED WORK), picklist
class Books extends Component {
	// map over each book and display certain fields (cover image, title, author)
 	state = {
 		title: this.props.title, 
 		authors: this.props.authors,
 		imageLink: this.props.imageLink,
 		coverImage: this.props.coverImage,
 	};

	render() {
		console.log('props', this.props) // TESTING 
		
		return (
			this.state.books.map((book) => ( 
				<div className="book">
					<div className="book-top">
						<div key={book.title} className="book-cover" style={{ width: 128, height: 193,
							backgroundImage: book.imageLink && book.coverImage ?
			      			`url(${book.coverImage})`:
			      			"url('./img/not-available.jpg')"}}></div>						
			            <div className="book-shelf-changer">
			              <select>
			                <option value="move" disabled>Move to...</option>
			                <option value="currentlyReading">Currently Reading</option>
			                <option value="wantToRead">Want to Read</option>
			                <option value="read">Read</option>
			                <option value="none">None</option>
			              </select>
			            </div>
			    	</div>
			    	<div key={book.id} className="book-title">{book.title}</div>
			    	<div key={book.id} className="book-authors">{book.authors}</div>	
				</div>
			))
		)
	}
}     				
      
export default Books