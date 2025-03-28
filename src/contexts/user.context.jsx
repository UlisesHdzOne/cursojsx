import { createContext, useState } from "react";

const UserContext = createContext();

const UserProviderWrapper = (props) => {
  const [user, setUser] = useState(null);

  const userData = {
    name: "Ulises",
    age: 30,
    email: "ulises@gmail.com",
    isAdmin: true,
  };

  const login = () => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser , login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProviderWrapper };
 