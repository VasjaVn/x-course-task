import { Link } from "react-router-dom";
import imgBooks from './../../static/img/books.jpg';
import imgCart from './../../static/img/cart.svg';
import { getValueFromStorageSignin } from '../../utils/signin-storage';
import "./Header.css"

const Header = ({ countCartItems, userName, onSignOut }) => {
    return (
        <header className="header-container">
                <Link to="/x-course-task/">
                    <div className="header-container-left">
                            <img src={imgBooks} alt="books" />
                            <h1>JS BAND STORE / Vasja Vn (v V)</h1>
                    </div>
                </Link>
                {getValueFromStorageSignin() === "true" &&
                    <div className="header-container-right"> 
                        <Link to="/x-course-task/cart">
                            <span style={{"background": "red"}}>{countCartItems}</span>
                            <img src={imgCart} alt="cart" />   
                        </Link>                   
                        <Link to="/x-course-task/signin" onClick={onSignOut}><span>Sign-Out</span></Link>              
                        <div className="circle"></div>
                        <div>
                            <h2>{userName}</h2>
                        </div>    
                    </div>
                }
        </header>
    );
}

export default Header;