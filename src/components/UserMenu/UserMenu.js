import React from 'react';
import css from './UserMenu.module.css';
// import { useDispatch, useSelector } from "react-redux";



export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.contacts.filter);

//   const handleChangeInputFilter = event => {
//     dispatch(changeFilter(event.target.value));
//   };

  return (
    <div className={css.userContainer}>
     <p className={css.mail}>natalia.mail@meta.ua</p>
     <button type="button" className={css.btn}>Logout 
     
     {/* {status === 'add' && (<div className={css.Loader}>
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="20"
            visible={true}
          />
        </div>)} */}
        
         </button>
    </div>
  );
};
