import React, { useEffect, lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from "react-redux";
import { getUserDataForRefresh } from '../redux/auth/auth-operations'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Route, Routes, Navigate } from "react-router-dom";
import css from './App.module.css';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'))
const LoginView = lazy(() => import('../views/LoginView/LoginView'))
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'))

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => state.auth.isFetchingCurrentUser);

  useEffect(() => {
    dispatch(getUserDataForRefresh())
  }, [dispatch])

  return (
    !isFetchingCurrentUser && (<div className={css.container}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>

          <Route index element={<HomeView />} />

          <Route path="register"
            element={<PublicRoute restricted >
              <RegisterView />
            </PublicRoute>} />

          <Route path="login"
            element={<PublicRoute restricted >
              <LoginView />
            </PublicRoute>} />

          <Route path="contacts"
            element={<PrivateRoute>
              <ContactsView />
            </PrivateRoute>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>)

  );
}


