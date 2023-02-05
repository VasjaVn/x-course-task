import "./CartItem.css"
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const CartItem = ({ item, onDelete }) => {
    const [cartItemId, setCartItemId] = useState(item.id);

    return ( 
        <div className="cart-item-container">
            <h3>
                <FaTimes 
                    title="Remove from Cart"
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(cartItemId)}
                />
            </h3>
            <div>{item.name}</div>
            <div>Count: {item.count}</div>
            <div>Total Price: {item.totalPrice} $</div>
        </div>
     );
}
 
export default CartItem;