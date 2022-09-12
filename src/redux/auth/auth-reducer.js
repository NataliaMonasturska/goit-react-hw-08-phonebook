import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { registerUsers, loginUser, logoutUser, getUserDataForRefresh } from './auth-operations'


const status = createReducer(false, {
    [registerUsers.pending]: () => 'addUser',
    [registerUsers.fulfilled]: () => false,
    [registerUsers.rejected]: () => false,

    [loginUser.pending]: () => 'loginUser',
    [loginUser.fulfilled]: () => false,
    [loginUser.rejected]: () => false,

    [logoutUser.pending]: () => 'logoutUser',
    [logoutUser.fulfilled]: () => false,
    [logoutUser.rejected]: () => false,

    [getUserDataForRefresh.pending]: () => 'refreshUser',
    [getUserDataForRefresh.fulfilled]: () => false,
    [getUserDataForRefresh.rejected]: () => false,
})

const error = createReducer(null, {
    [registerUsers.rejected]: (_, { payload }) => payload,
    [registerUsers.fulfilled]: () => null,

    [loginUser.rejected]: (_, { payload }) => payload,
    [loginUser.fulfilled]: () => null,

    [logoutUser.fulfilled]: (_, { payload }) => payload,
    [logoutUser.rejected]: () => null,

    [getUserDataForRefresh.rejected]: (_, { payload }) => payload,
    [getUserDataForRefresh.fulfilled]: () => null,
})

const user = createReducer({ name: null, email: null }, {
    [registerUsers.fulfilled]: (_, { payload }) => payload.user,
    [loginUser.fulfilled]: (_, { payload }) => payload.user,
    [logoutUser.fulfilled]: () => ({ name: null, email: null }),
    [getUserDataForRefresh.fulfilled]: (_, { payload }) => payload,
})

const isLoggedIn = createReducer(false, {
    [registerUsers.fulfilled]: () => true,
    [loginUser.fulfilled]: () => true,
    [logoutUser.fulfilled]: () => false,
    [getUserDataForRefresh.fulfilled]: () => true,
})

// выяснить как достать значение токен из payload и записать в состояние токена
const token = createReducer(null, {
    [registerUsers.fulfilled]: (_, { payload }) => payload.token,
    [loginUser.fulfilled]: (_, { payload }) => payload.token,
    [logoutUser.fulfilled]: () => null,
})

const isFetchingCurrentUser = createReducer(false, {
    [getUserDataForRefresh.pending]: () => true,
    [getUserDataForRefresh.fulfilled]: () => false,
    [getUserDataForRefresh.rejected]: () => false,

})


export const authReducer = combineReducers({
    status,
    error,
    user,
    isLoggedIn,
    token,
    isFetchingCurrentUser
})

