import CartItem from "./CartItem";
import "./FullCart.css"

const FullCart = ({ cartItems, onDelete }) => {
    return (
        <div className="cart-full-container">
            {cartItems.map((item) => {
                    item = JSON.parse(item);
                    return (
                        <CartItem key={item.id} item={item} onDelete={onDelete} />    
                    );
            })}
        </div>    
    );
}

export default FullCart;