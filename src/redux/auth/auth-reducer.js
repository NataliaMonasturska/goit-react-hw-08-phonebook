import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { registerUsers, loginUser, logoutUser } from './auth-operations'


const status = createReducer(false, {
    [registerUsers.pending]: () => 'addUser',
    [registerUsers.fulfilled]: () => false,
    [registerUsers.rejected]: () => false,

    [loginUser.pending]: () => 'loginUser',
    [loginUser.fulfilled]: () => false,
    [loginUser.rejected]: () => false,
})

const error = createReducer(null, {
    [registerUsers.rejected]: (_, { payload }) => payload,
    [registerUsers.fulfilled]: () => null,

    [loginUser.rejected]: (_, { payload }) => payload,
    [loginUser.fulfilled]: () => null,
})

const user = createReducer({ name: null, email: null }, {
    [registerUsers.fulfilled]: (_, { payload }) => payload.user,
    [loginUser.fulfilled]: (_, { payload }) => payload,
    [logoutUser.fulfilled]: (_, { payload }) => ({ name: null, email: null })
})

const isLoggedIn = createReducer(false, {
    [registerUsers.fulfilled]: () => true,
    [loginUser.fulfilled]: () => true,
    [logoutUser.fulfilled]: () => false,
})

// выяснить как достать значение токен из payload и записать в состояние токена
const token = createReducer(null, {
    [registerUsers.fulfilled]: (_, { payload }) => payload.token,
    [loginUser.fulfilled]: (_, { payload }) => payload.token,
    [logoutUser.fulfilled]: () => null,

}

)
export const authReducer = combineReducers({
    status,
    error,
    user,
    isLoggedIn,
    token
})

