import { useState } from 'react';
import { addCartItemToStorage } from '../../utils/cart-storage.js';
import './AddToCartForm.css';


const AddToCartForm = ({ book, onChangeCountCartItems }) => {
    const [totalPrice, setTotalPrice] = useState(book.price);
    const [countBooks, setCountBooks] = useState(1);

    const handleChange = (e) => {
        const count = e.target.value;
        setCountBooks(count);
        const totalPrice = book.price * count;
        setTotalPrice(totalPrice);
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: Math.random(1, 100),
            name: book.title,
            count: countBooks,
            totalPrice: totalPrice
        };
        addCartItemToStorage(JSON.stringify(cartItem));
        // plus one item to cart
        onChangeCountCartItems(1);
    }

    return ( 
        <form id="frmAddToCart">
            <fieldset>
                <span className="left">Price, $</span>
                <span>{book.price}</span>
            </fieldset>
            <fieldset>
                <span className="left">Count</span>
                <input 
                    type="number" 
                    min="1" 
                    max="50"
                    onChange={(e) => handleChange(e)}
                />
            </fieldset>
            <fieldset>
                <span className="left">Total price, $</span>
                <span>{totalPrice}</span>
            </fieldset>
            <fieldset>
                <button onClick={handleAddToCart} type="button">Add to cart</button>
            </fieldset>
    </form>
);
}
 
export default AddToCartForm;