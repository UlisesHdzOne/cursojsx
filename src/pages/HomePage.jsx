import React, { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { UserContext } from "../contexts/user.context";


export const HomePage = () => {
  const {user, login,logout} = useContext(UserContext);



  return (
    <>
      <HeaderComponent />
      <div>HomePage</div>
      {user && <span>{user.name}</span>}
      {/* <p>{user}</p> */}

      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>

    </>
  );
};
 