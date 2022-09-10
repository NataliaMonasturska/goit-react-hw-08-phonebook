import React, { useState } from 'react';
import css from './RegisterView.module.css';
import { useDispatch, useSelector } from "react-redux";
import Notiflix from 'notiflix';
import { registerUsers } from '../../redux/contacts/contacts-operations'
import { RotatingLines } from 'react-loader-spinner';

export const RegisterView = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const items = useSelector(state => state.contacts.items);
    const status = useSelector(state => state.contacts.status);
    //   const status = useSelector(state => state.contacts.status);

    const handleChangeInput = event => {
        if (event.target.name === 'name') {
            setName(event.target.value)
        }
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value)
        }
    };

    const handleSubmitInputName = event => {
        event.preventDefault();
        if(name === '' || password === ''){
            return
        }
        const nameNormalized = name.toLowerCase();
        const dobbleName = items.find(
            item => item.name.toLowerCase() === nameNormalized
        );
        if (dobbleName) {
            Notiflix.Notify.failure(`${name} is already in contacts`);
            return
        }
        dispatch(registerUsers(
            {
                "name": name,
                "email": email,
                "password": password,
            }
        ));
        setName('')
        setEmail('')
        setPassword('')
    };


    return (
        <div className={css.container }>
            <p className={css.title}>REGISTER</p>
            <form className={css.form} onSubmit={handleSubmitInputName}>
                <label className={css.label}>
                    <span className={css.inputName}>Name</span>
                    <input
                        className={css.input}
                        onChange={handleChangeInput}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>

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

                <button type="submit" className={css.btn}>REGISTER

                    {status === 'addUser' && (<div className={css.Loader}>
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