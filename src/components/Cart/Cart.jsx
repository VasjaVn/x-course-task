import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { getValueFromStorageSignin } from '../../utils/signin-storage';
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";
import { removeCartAllItems, removeCartItemFromStorageByID } from "../../utils/cart-storage";
import { getCountCartItemsInStorage, getCartItemsFromStorage } from "../../utils/cart-storage";
import "./Cart.css"


const Cart = ({ onChangeCountCartItems }) => {
    const [cartItems, setCartItems] = useState(getCartItemsFromStorage())
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(calculateTotalPrice(false));
    }, []);

    const deleteAllCartItems = () => {
        const countCartItems = getCountCartItemsInStorage();
        removeCartAllItems();
        setCartItems(getCartItemsFromStorage());
        calculateTotalPrice(true);
        // minus one item from cart
        onChangeCountCartItems(-1 * countCartItems);
    }

    // Delete Cart Item
    const deleteCartItem = (cartItemId) => {
        removeCartItemFromStorageByID(cartItemId);
        setCartItems(getCartItemsFromStorage());
        calculateTotalPrice(true);
        // minus one item from cart
        onChangeCountCartItems(-1);
    }

    // Calculate Total Price
    const calculateTotalPrice = (flag) => {
        const cartItems = getCartItemsFromStorage();

        let totalPrice = 0;
        cartItems.forEach(cartItem => {
            cartItem = JSON.parse(cartItem);
            totalPrice += cartItem.totalPrice;    
        });

        if ( flag ) {
            setTotalPrice(totalPrice);
        } else {
            return totalPrice;
        }
    }

    if (getValueFromStorageSignin() === "false") {
        return (
            <Navigate to="/x-course-task/signin"/>
        );
    }

    return (
            <main className="cart-container">
                <div className="wrapper-btn-purchase">
                    <button 
                        id="btnPurchase" 
                        disabled={cartItems.length > 0 ? '' : 'disabled'}
                        className={cartItems.length > 0 ? '' : 'cursor-not-allowed'}
                        onClick={() => {deleteAllCartItems()}}
                    >
                        Purchase
                    </button>
                </div>
                {cartItems.length > 0 ? <FullCart cartItems={cartItems} onDelete={deleteCartItem} /> : <EmptyCart />}
                {totalPrice > 0 && 
                    <div id="totalPrice">
                        <p>Total Price: {totalPrice} $</p>
                    </div>
                }
            </main>
        );
}
 
export default Cart;