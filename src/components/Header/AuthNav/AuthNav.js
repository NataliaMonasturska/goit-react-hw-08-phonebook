import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <div className={css.containerAuthNav}>
            <NavLink className={css.link} to="/register">
                <p>REGISTER</p>
            </NavLink>
            <NavLink className={css.link} to="/login">
                <p>LOGIN</p>
            </NavLink>
        </div >
    );
}
