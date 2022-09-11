import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import React, { useEffect } from 'react';
import {getAllContactsUser} from '../../redux/contacts/contacts-operations'
import { useSelector, useDispatch } from "react-redux";
import { RotatingLines } from 'react-loader-spinner';
import css from './ContactsView.module.css';

export const ContactsView = () => {
    const status = useSelector(state => state.contacts.status);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllContactsUser())
    }, [dispatch])


    return (
        <div className={css.phonebookContainer}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            {status === 'fetch' && (<div className={css.Loader}>
                <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="150"
                    visible={true}
                />
            </div>)}
            <ContactList />
        </div>
    )
}
