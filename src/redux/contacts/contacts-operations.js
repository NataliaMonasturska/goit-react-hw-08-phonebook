import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUserContacts, CreateNewContact, contactDelete, getUserData } from '../../services/Api'


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

