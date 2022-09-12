import css from './Header.module.css';
import { UserMenu } from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { useSelector } from "react-redux";



export const Header = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <div className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
    );
}
