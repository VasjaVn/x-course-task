import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import imgAvatar from './../../static/img/avatar.png';
import { getValueFromStorageSignin } from '../../utils/signin-storage';
import "./Signin.css"

const Signin = ({ onSignIn }) => {
    const [username, setUsername] = useState('');

    const handleClick = (e) => {
        if (!isUsernameCorrect()) {
            e.preventDefault();
        } else {
            onSignIn(username);
        }
    }

    const isUsernameCorrect = () => {
        if (username.length === 0) {
            alert("Please enter username for log-in.");
            return false;
        }
        return true;
    }

    if (getValueFromStorageSignin() === "true") {
        return (
            <Navigate to="/x-course-task/books"/>
        );
    } else {
        return (
            <main className="signin-container">
                <form id="signinForm">
                    <fieldset>
                        <div id="imgBorder">
                            <img src={imgAvatar} alt="avatar" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <p>Username</p>
                    </fieldset>
                    <fieldset>
                        <input type="text" onChange={e => {setUsername(e.target.value.trim())}} placeholder="Type username" />
                    </fieldset>
                    <fieldset>
                        <Link to="/x-course-task/books">
                            <button onClick={e => handleClick(e)}>Sign-In</button>
                        </Link>
                    </fieldset>
                </form>
            </main>
        );
    }

    // return (
    //     <main className="signin-container">
    //         <form id="signinForm">
    //             <fieldset>
    //                 <div id="imgBorder">
    //                     <img src="/img/avatar.png" alt="avatar" />
    //                 </div>
    //             </fieldset>
    //             <fieldset>
    //                 <p>Username</p>
    //             </fieldset>
    //             <fieldset>
    //                 <input type="text" onChange={e => {setUsername(e.target.value.trim())}} placeholder="Type username" />
    //             </fieldset>
    //             <fieldset>
    //                 <Link to="/books">
    //                     <button onClick={e => handleClick(e)}>Sign-In</button>
    //                 </Link>
    //             </fieldset>
    //         </form>
    //     </main>
    // );
}

export default Signin;