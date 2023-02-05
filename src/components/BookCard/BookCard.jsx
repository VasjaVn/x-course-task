import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => {
    return ( 
        <div className="book-card">
            <div>
                <img 
                    src={book.image !== "" ? book.image : "https://via.placeholder.com/400"} 
                    alt={book.title}
                />
            </div>
            <div>
                <span>{book.title}</span>
                <h3>{book.author}</h3>
                <p>{book.price} $</p>
                <Link to={'/x-course-task/books/' + book.id}>View</Link>
            </div>
        </div>
     );
}
 
export default BookCard;