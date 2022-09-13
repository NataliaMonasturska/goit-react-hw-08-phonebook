import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Header } from '../Header/Header';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {

  return (
    <div>
      <Header />
      <div className={css.container}>
        <Suspense
          fallback={
            <div className={css.loaderContainer}>
              <RotatingLines
                strokeColor="#3f51b5"
                strokeWidth="5"
                animationDuration="0.75"
                width="150"
                visible={true}
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default SharedLayout;