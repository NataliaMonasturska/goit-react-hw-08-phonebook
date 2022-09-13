
import css from './HomeView.module.css';
import { useSelector } from "react-redux";

const HomeView = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const name = useSelector(state => state.auth.user.name);
    return (
        <div className={css.homeContainer}>
            {isLoggedIn ? <h1 className={css.title}>Dear {name}! Welcome to the phonebook app! Please go to the phonebook page to start using the application. </h1> : <h1 className={css.title}>Welcome to the phonebook app! Please login or register to use the app.</h1>}
        </div>
    )
}

export default HomeView;


