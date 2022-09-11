import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, userLogin, userLogout } from '../../services/Api'
import Notiflix from 'notiflix';

// зарегестрировать пользователя

export const registerUsers = createAsyncThunk('user/register',
    async (userData) => {
        try {
            const user = await getUsers(userData);
            return user;
        }
        catch (error) {
            Notiflix.Notify.failure(
                'Registration error. Please try again.'
            );
        }
    }


)

// Залогинить пользователя

export const loginUser = createAsyncThunk('user/login',

    async (values) => {
        try {
            const user = await userLogin(values);
            return user;
        }
        catch (error) {
            Notiflix.Notify.failure(
                'Login error. Please try again.'
            );
        }
    }


)

// Разлогинить пользователя

export const logoutUser = createAsyncThunk('user/Logout',
async (values) => {
    try {
        const user = await userLogout(values);
        return user;
    }
    catch (error) {
        Notiflix.Notify.failure(
            'Logout error. Please try again.'
        );
    }
}
)