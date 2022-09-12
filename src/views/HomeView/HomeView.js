
import css from './HomeView.module.css';

const HomeView = () => {
    return (
        <div className={css.homeContainer}>
            <h1 className={css.title}>Welcome to the phonebook app! Please login or register to use the app.</h1>
        </div>
    )
}

export default HomeView;
