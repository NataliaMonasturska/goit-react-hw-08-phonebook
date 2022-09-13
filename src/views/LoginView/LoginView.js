import React, { useState } from 'react';
import css from './LoginView.module.css';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../redux/auth/auth-operations'
import { RotatingLines } from 'react-loader-spinner';

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const status = useSelector(state => state.auth.status);

    const handleChangeInput = event => {
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value)
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(loginUser({ email, password, }));
        if (status === 'fulfilledLoginUser') {
            setEmail('')
            setPassword('')
        }

    };


    return (
        <div className={css.container}>
            <p className={css.title}>LOGIN</p>
            <form className={css.form} onSubmit={handleSubmit}>

                <label className={css.label}>
                    <span className={css.inputName}>Email</span>
                    <input
                        className={css.input}
                        onChange={handleChangeInput}
                        value={email}
                        type="email"
                        name="email"
                        required
                    />
                </label>

                <label className={css.label}>
                    <span className={css.inputName}>Password</span>
                    <input
                        className={css.input}
                        onChange={handleChangeInput}
                        value={password}
                        type="password"
                        name="password"
                        required
                    />
                </label>

                <button type="submit" className={css.btn}>LOGIN

                    {status === 'loginUser' && (<div className={css.Loader}>
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="20"
                            visible={true}
                        />
                    </div>)}

                </button>
            </form>
        </div>
    );
}

export default LoginView