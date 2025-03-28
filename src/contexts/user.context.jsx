import { createContext, useState } from "react";

const UserContext = createContext();

const UserProviderWrapper = (props) => {
  const [user, setUser] = useState("Ulises");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProviderWrapper };
