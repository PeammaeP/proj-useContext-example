// 1. create UserContext

import { createContext, useState } from "react";

export const UserContext = createContext(null);

// 2. create UserProvider

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: {
      email: "test@gmail.com",
      job: "Developer",
    },
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
