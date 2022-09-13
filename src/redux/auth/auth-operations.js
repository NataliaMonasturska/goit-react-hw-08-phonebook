import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, userLogin, userLogout, getUserData } from '../../services/Api'
import Notiflix from 'notiflix';
import axios from 'axios';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}
// зарегестрировать пользователя

export const registerUsers = createAsyncThunk('user/register',
    async (userData,  { rejectWithValue } ) => {
        try {
            const user = await getUsers(userData);
            token.set(user.token)
            return user;
        }
        catch (error) {
            Notiflix.Notify.failure(
                'Registration error. Please try again.'
            );
            return rejectWithValue(error.response.data)
        }
    }


)

// Залогинить пользователя

export const loginUser = createAsyncThunk('user/login',

    async (values,  { rejectWithValue }) => {
        try {
            const user = await userLogin(values);
            token.set(user.token);
            return user;
        }
        catch (error) {
            Notiflix.Notify.failure(
                'Login error. Please try again.'
            );
            return rejectWithValue(error.response.data)
        }
    }


)

// Разлогинить пользователя

export const logoutUser = createAsyncThunk('user/Logout',
    async () => {
        try {
            const user = await userLogout();
            token.unset();
            return user;
        }
        catch (error) {
            Notiflix.Notify.failure(
                'Logout error. Please try again.'
            );
        }
    }
)



// получить информацию о текущем пользователе

export const getUserDataForRefresh = createAsyncThunk('user/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const data = await getUserData();
            return data;
        } 
        catch (error) {
           console.log(error);
        }
    }
)




// export const getUserData = async () => {
//     const response = await axios.get(`${API_BASE_URL}/users/current`);
//     const userData = await response.data;
//     return userData;
//   }