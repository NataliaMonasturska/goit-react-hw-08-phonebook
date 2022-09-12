import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";



export const Navigation = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <div className={css.containerNavigate}>
            <NavLink className={css.link} to="/" >
                <p>HOME</p>
            </NavLink>
            {isLoggedIn && (<NavLink className={css.link} to="/contacts">
                <p>PHONEBOOK</p>
            </NavLink>)}

        </div>
    );
}
