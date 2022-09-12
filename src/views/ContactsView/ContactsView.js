import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import React, { useEffect } from 'react';
import { getAllContactsUser } from '../../redux/contacts/contacts-operations'
import { useSelector, useDispatch } from "react-redux";
import { RotatingLines } from 'react-loader-spinner';
import css from './ContactsView.module.css';

const ContactsView = () => {
    const status = useSelector(state => state.contacts.status);
    const userStatus = useSelector(state => state.auth.status);
    const items = useSelector(state => state.contacts.items);
    console.log(items);
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
            {status === 'fetch' && items.length === 0 && (<div className={css.Loader}>
                <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="150"
                    visible={true}
                />
            </div>)}
            {userStatus !== 'refreshUser' && <ContactList />}
        </div>
    )
}

export default ContactsView 