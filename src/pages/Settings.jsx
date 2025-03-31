import React, { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

export const Settings = () => {
  const {user} = useContext(UserContext);

    //const [hasAccess, setHasAccess] = useState(true)

    if(!user?.isAdmin) return <Navigate to={"/error"}/>
    //if(!hasAccess) return <Navigate to={"/error"}/>


  return (
    <>
      <HeaderComponent />
      <div>Settings</div>
    </>
  );
};
