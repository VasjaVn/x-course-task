import { Navigate } from 'react-router-dom';
import { getValueFromStorageSignin } from '../utils/signin-storage';

const Home = () => {
    if (getValueFromStorageSignin() === "true") {
        return (
            <Navigate to="/x-course-task/books"/>
        );
    } else {
        return (
            <Navigate to="/x-course-task/signin"/>
        );
    }
}
 
export default Home;