import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from "react-redux";
import css from './ContactsView.module.css';

export const ContactsView = () => {
    const status = useSelector(state => state.contacts.status);
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
