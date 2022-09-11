import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { changeFilter } from './contacts-actions';
import { registerUsers, loginUser,getAllContactsUser, CreateContact, deleteUserContact} from './contacts-operations'

// const items = createReducer([],
//     {
//         [fetchContacts.fulfilled]: (_, { payload }) => payload,
//         [postContact.fulfilled]: (state, { payload }) => [...state, payload],
//         [contactDelete.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload)
//     });

    const items = createReducer([],
        {
            [getAllContactsUser.fulfilled]: (_, { payload }) => payload,
            [CreateContact.fulfilled]: (state, { payload }) => [...state, payload],
            [deleteUserContact.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload)
        });


const status = createReducer(true, {
    // [fetchContacts.pending]: () => 'fetch',
    // [fetchContacts.fulfilled]: () => false,
    // [fetchContacts.rejected]: () => false,

    // [contactDelete.pending]: (_, action) => action.meta.arg,
    // [contactDelete.fulfilled]: () => false,
    // [contactDelete.rejected]: () => false,

    // [postContact.pending]: () => 'add',
    // [postContact.fulfilled]: () => 'addSuccess',
    // [postContact.rejected]: () => false,
    [getAllContactsUser.pending]: () => 'fetch',
    [getAllContactsUser.fulfilled]: () => false,
    [getAllContactsUser.rejected]: () => false,

    [deleteUserContact.pending]: (_, action) => action.meta.arg,
    [deleteUserContact.fulfilled]: () => false,
    [deleteUserContact.rejected]: () => false,

    [CreateContact.pending]: () => 'add',
    [CreateContact.fulfilled]: () => 'addSuccess',
    [CreateContact.rejected]: () => false,

// 8дз

    // [registerUsers.pending]: () => 'addUser',
    // [registerUsers.fulfilled]: () => false,
    // [registerUsers.rejected]: () => false,

    // [loginUser.pending]: () => 'loginUser',
    // [loginUser.fulfilled]: () => false,
    // [loginUser.rejected]: () => false,


})

const error = createReducer(null, {
    // [fetchContacts.rejected]: (_, { payload }) => payload,
    // [fetchContacts.pending]: () => null,

    // [contactDelete.rejected]: (_, { payload }) => payload,
    // [contactDelete.pending]: () => null,

    // [postContact.rejected]: (_, { payload }) => payload,
    // [postContact.pending]: () => null,

    [getAllContactsUser.rejected]: (_, { payload }) => payload,
    [getAllContactsUser.pending]: () => null,

    [deleteUserContact.rejected]: (_, { payload }) => payload,
    [deleteUserContact.pending]: () => null,

    [CreateContact.rejected]: (_, { payload }) => payload,
    [CreateContact.pending]: () => null,

//  8дз
    // [registerUsers.rejected]:  (_, { payload }) => payload,
    // [registerUsers.fulfilled]: () => null,

    // [loginUser.rejected]: (_, { payload }) => payload,
    // [loginUser.fulfilled]: () => null,

})

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})

// 8дз
// регистрация нового пользователя 

const user = createReducer({}, {
    [registerUsers.fulfilled]: (_, { payload }) => payload,
    [loginUser.fulfilled]: (_, { payload }) => payload,
}
)
export const contactsReducer = combineReducers({
    items,
    status,
    error,
    filter,
    user,
})

