// Display book sub-image to page

// import React 
import React, {Component} from 'react'

// Book component
class BookList extends Component {
	// render a book
	// map over each book and display certain fields (cover image, title, author)
	render() {
		return (
 			<ol className="books-grid">
				{this.props.books.map(book => (
					<li>
						<div className='book'>
							<div className="book-top">
								<div key={book.id} className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("URL")' }}></div>,							
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
					</li>	
				))}
			</ol>        
		)
	}			
}
      
export default BookList