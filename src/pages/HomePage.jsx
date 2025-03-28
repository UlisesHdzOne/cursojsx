import React, { useContext } from "react";
import HeaderComponent from "../componens/HeaderComponent";
import { UserContext } from "../contexts/user.context";

export const HomePage = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <>
      <HeaderComponent />
      <div>HomePage</div>
      <p>{user}</p>
    </>
  );
};
