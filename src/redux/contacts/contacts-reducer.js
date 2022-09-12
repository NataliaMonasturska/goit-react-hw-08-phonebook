import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { changeFilter } from './contacts-actions';
import { getAllContactsUser, CreateContact, deleteUserContact } from './contacts-operations';

const items = createReducer([],
    {
        [getAllContactsUser.fulfilled]: (_, { payload }) => payload,
        [CreateContact.fulfilled]: (state, { payload }) => [...state, payload],
        [deleteUserContact.fulfilled]: (state, action) => state.filter(({ id }) => id !== action.meta.arg,)
    });

const status = createReducer(true, {
    [getAllContactsUser.pending]: () => 'fetch',
    [getAllContactsUser.fulfilled]: () => false,
    [getAllContactsUser.rejected]: () => false,

    [deleteUserContact.pending]: (_, action) => action.meta.arg,
    [deleteUserContact.fulfilled]: () => false,
    [deleteUserContact.rejected]: () => false,

    [CreateContact.pending]: () => 'add',
    [CreateContact.fulfilled]: () => 'addSuccess',
    [CreateContact.rejected]: () => false,
})

const error = createReducer(null, {
    [getAllContactsUser.rejected]: (_, { payload }) => payload,
    [getAllContactsUser.pending]: () => null,

    [deleteUserContact.rejected]: (_, { payload }) => payload,
    [deleteUserContact.pending]: () => null,

    [CreateContact.rejected]: (_, { payload }) => payload,
    [CreateContact.pending]: () => null,
})

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})

export const contactsReducer = combineReducers({
    items,
    status,
    error,
    filter,
})

