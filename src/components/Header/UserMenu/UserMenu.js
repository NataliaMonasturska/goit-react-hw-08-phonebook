import React from 'react';
import css from './UserMenu.module.css';
import { logoutUser } from '../../../redux/auth/auth-operations';
import { RotatingLines } from 'react-loader-spinner';
import {
    useDispatch,
    useSelector,
} from "react-redux";



export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.user.email);
    const status = useSelector(state => state.auth.status);
    return (
        <div className={css.userContainer}>
            <p className={css.mail}>{email}</p>
            <button type="button" onClick={() => dispatch(logoutUser())} className={css.btn}>Logout
                {status === 'logoutUser' && (<div className={css.Loader}>
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="20"
                        visible={true}
                    />
                </div>)}
            </button>
        </div>
    );
};
