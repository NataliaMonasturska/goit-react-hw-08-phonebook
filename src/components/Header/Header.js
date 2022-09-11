import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import {UserMenu} from '../UserMenu/UserMenu'



export const Header = () => {

    // const status = useSelector(state => state.contacts.status);
    return (
        <div className={css.header}>
            <NavLink className={css.link}  to="/">
                <p>HOME</p>
            </NavLink>
            <NavLink className={css.link} to="/contacts">
                <p>PHONEBOOK</p>
            </NavLink>
            <NavLink className={css.link} to="/register">
                <p>REGISTER</p>
            </NavLink>
            <NavLink className={css.link} to="/login">
                <p>LOGIN</p>
            </NavLink>
            <UserMenu />
        </div>
    );
}
