import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext();

export const Authprovider = ({children}) => {
    const initialUserState = Cookies.get('jwt') || localStorage.getItem('massenger') 

    const [authuser, setauthuser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);
  return (
    <AuthContext.Provider value={{authuser, setauthuser}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useState, useContext } from 'react';

// export const AuthContext = createContext();

// export const Authprovider = ({ children }) => {
//   const [authuser, setauthuser] = useState(() => {
//     try {
//       const stored = localStorage.getItem('massenger');
//       return stored ? JSON.parse(stored) : null;
//     } catch (err) {
//       console.error("Failed to parse user from localStorage", err);
//       return null;
//     }
//   });

//   return (
//     <AuthContext.Provider value={{ authuser, setauthuser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
