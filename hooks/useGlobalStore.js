import React, { useEffect, useContext, createContext, useState } from 'react';
const GlobalStoreContext = createContext();

const GlobalStore = () => {
  // TODO
  /**
   * *call user data
   * *call userRole -
   * *call states -
   * *update with user info
   */

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [role, setRole] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user-data'));
    if (data) {
      setToken(data.token);
      setUser(data.user);
    }
  }, [token]);

  return {
    user,
    token,
    setToken,
    userProfile,
    setUserProfile,
  };
};

export const GlobalStoreProvider = ({ children, localStorage }) => {
  const data = GlobalStore(localStorage);

  return (
    <GlobalStoreContext.Provider value={data}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalStore = () => {
  return useContext(GlobalStoreContext);
};
