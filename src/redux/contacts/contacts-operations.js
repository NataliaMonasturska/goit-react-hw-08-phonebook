import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { getUsers, userLogin, userLogout, getAllUserContacts, CreateNewContact, contactDelete, getUserData } from '../../services/Api'


// export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
//     async () => {
//         const contacts = await getContacts();
//         return contacts;
//     }
// )

// export const postContact = createAsyncThunk('contacts/add',
//     async (newContact) => {
//         const contact = await addContact(newContact);
//         return contact;
//     }
// )
// export const contactDelete = createAsyncThunk('contacts/delete',
//     async (contactId) => {
//         const id = await deleteContact(contactId);
//         return id;
//     }
// )

// 8дз

// регистрация пользователя 

export const registerUsers = createAsyncThunk('user/register',
    async (userData) => {
        const user = await getUsers(userData);
        return user;
    }
)

// Залогинить пользователя

export const loginUser = createAsyncThunk('user/login',
    async (values) => {
        const user = await userLogin(values);
        return user;
    }
)

// Разлогинить пользователя

export const logoutUser = createAsyncThunk('user/Logout',
    async (values) => {
        const user = await userLogout(values);
        return user;
    }
)

// // получить все контакты пользователя

export const getAllContactsUser = createAsyncThunk('contacts/getContacts',
    async () => {
        const contacts = await getAllUserContacts();
        return contacts;
    }
)

// CreateNewContact

export const CreateContact = createAsyncThunk('contacts/add',
    async (value) => {
        const contact = await CreateNewContact(value);
        return contact;
    }
)

// Удалить контакт

export const deleteUserContact = createAsyncThunk('contacts/delete',
    async (contactId) => {
        const user = await contactDelete(contactId);
        return user;
    }
)


// получить информацию о текущем пользователе

export const getUsersData = createAsyncThunk('user/get',
async () => {
    const user = await getUserData();
    return user; 
}
)

