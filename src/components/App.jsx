import React, { useEffect } from 'react';
import {ContactsView} from '../views/ContactsView/ContactsView';
import {RegisterView } from '../views/RegisterView/RegisterView';
import {HomeView} from '../views/HomeView/HomeView';
import {LoginView} from '../views/LoginView/LoginView';
import {SharedLayout} from './SharedLayout/SharedLayout';
import { useSelector, useDispatch } from "react-redux";
import { getAllContactsUser, getUsersData } from '../redux/contacts/contacts-operations'
import { RotatingLines } from 'react-loader-spinner';
import { Header } from './Header/Header';
import { Routes, Route, Navigate } from "react-router-dom";
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.contacts.status);

//   useEffect(() => {
//     dispatch(getUsersData())
//   }, [dispatch])

// useEffect(() => {
// dispatch()
// })


  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomeView/>} />
            <Route path="register" element={<RegisterView />}/>
            <Route path="login" element={<LoginView />}/>
            <Route path="contacts" element={<ContactsView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}







// export const Phonebook = () => {
//   const status = useSelector(state => state.contacts.status);
//   return (
//     <div className={css.appContainer}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm />

//       <h2 className={css.title}>Contacts</h2>
//       <Filter />
//       {status === 'fetch' && (<div className={css.Loader}>
//         <RotatingLines
//           strokeColor="white"
//           strokeWidth="5"
//           animationDuration="0.75"
//           width="150"
//           visible={true}
//         />
//       </div>)}
//       <ContactList />
//     </div>
//   );
// }



