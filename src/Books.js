// Display book image, title, author to page

// import React 
import React from 'react'

// Book component converted to stateless function 
function BookList (props, book) {
	// map over each book and display certain fields (cover image, title, author)
	return (
		<ol className="books-grid">
			<li>
				<div className="book">
					<div className="book-top">
						<div key={book.id} className="book-cover" style={{ width: 128, height: 193,
							backgroundImage: book.imageLinks && book.imageLinks.thumbnail ?
	              			`url(${book.imageLinks.thumbnail})`:
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
			</li>	
		</ol>        
	)				
}
      
export default BookList