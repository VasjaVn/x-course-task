import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin/Signin'
import Books from './components/Books/Books'
import Book from './components/Book/Book'
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { initialStorageSignin, getValueFromStorageSignin, setValueForStorageSignin } from './utils/signin-storage';
import { initialStorageUsername, getValueFromStorageUsername, setValueForStorageUsername } from './utils/username-storage';
import { getCountCartItemsInStorage, initialStorageCart } from './utils/cart-storage';
import './App.css';
import PageNotFound from './components/PageNotFound';

const App = () => {
  const [userSignin, setUserSignin] = useState(getValueFromStorageSignin());
  const [userName, setUserName] = useState(getValueFromStorageUsername());
  const [countCartItems, setCountCartItems] = useState(getCountCartItemsInStorage());

  // Handle Sign-In
  const onSignIn = (userName) => {
    setValueForStorageSignin("true")
    setValueForStorageUsername(userName)
    setUserSignin(!userSignin);
    setUserName(userName);
  }

  // Handle Sign-Out
  const onSignOut = () => {
    setValueForStorageSignin("false");
    setValueForStorageUsername("");
    setUserSignin(!userSignin);
    setUserName("");
  }

  // Change Count Items In Cart
  const onChangeCountCartItems = (one) => {
    setCountCartItems(countCartItems + one);
  }

  // Initial Local Storage
  useEffect(() => {
    console.log("Initial Local Storage");
    initialStorageSignin();
    initialStorageUsername();
    initialStorageCart();
  }, []);

  return (
    <div className="app">
      <Header userName={userName} countCartItems={countCartItems} onSignOut={onSignOut}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin onSignIn={onSignIn}/>} />
        <Route path="/cart" element={<Cart onChangeCountCartItems={onChangeCountCartItems} />} />
        <Route path="/books" element={<Books/>} />
        <Route path="/books/:bookID" element={<Book onChangeCountCartItems={onChangeCountCartItems}/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
