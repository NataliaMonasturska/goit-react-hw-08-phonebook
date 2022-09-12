import React from 'react';
import css from './UserMenu.module.css';
import { logoutUser } from '../../../redux/auth/auth-operations'
import {
    useDispatch,
    useSelector,
} from "react-redux";



export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.user.email);

    return (
        <div className={css.userContainer}>
            <p className={css.mail}>{email}</p>
            <button type="button" onClick={() => dispatch(logoutUser())} className={css.btn}>Logout
            </button>
        </div>
    );
};
