import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import { getValueFromStorageSignin } from '../../utils/signin-storage';
import SeacrhIcon from './../../static/img/search.svg';
import jsonData from '../../static/data/books.json';
import './Books.css';

const Books = () => {    
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState(jsonData.books);

    const options = [
        { value: '0', label: 'Select book price' },
        { value: '10', label: 'Price less then 10$' },
        { value: '20', label: 'Price less then 20$' },
        { value: '30', label: 'Price less then 30$' },
        { value: '40', label: 'Price less then 40$' },
        { value: '50', label: 'Price less then 50$' },
      ];

    // Search Book By Name
    const searchBooks = (searchTerm) => {
      if (searchTerm.length === 0) {
        setBooks(jsonData.books);
      } else {
        setBooks(
            jsonData.books.filter(
                book => book.title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
      }
    }

    // Search Books By Price
    const searchBooksByPrice = (price) => {
        if (searchTerm.trim().length === 0) {
            setBooks(jsonData.books.filter(book => book.price < price));
        } else {
            setBooks(jsonData.books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) && book.price < price));
        }
    }

    if (getValueFromStorageSignin() === "false") {
        return (
            <Navigate to="/x-course-task/signin"/>
        );
    }

    return ( 
        <main className='container'>
            <div className="container-search-and-select">
                <div className='search'>
                    <input 
                        placeholder="Search for books by name"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <img 
                        src={SeacrhIcon}
                        alt="search icon"
                        onClick={() => searchBooks(searchTerm)}
                    />
                </div>
                <div className="select">
                    <select onChange={(e) => {searchBooksByPrice(e.target.value)}}>
                        {options.map(option => (
                            <option key={Math.random(0, 100)} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            {books.length > 0
                ? (
                    <div className="container">
                        {books.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No books found</h2>
                    </div>
                )
            }
        </main>
    );    
}
 
export default Books;