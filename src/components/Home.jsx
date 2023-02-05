import { Navigate } from 'react-router-dom';
import { getValueFromStorageSignin } from '../utils/signin-storage';

const Home = () => {
    if (getValueFromStorageSignin() === "true") {
        return (
            <Navigate to="/books"/>
        );
    } else {
        return (
            <Navigate to="/signin"/>
        );
    }
}
 
export default Home;