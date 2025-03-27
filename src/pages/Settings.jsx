import React, { useState } from "react";
import HeaderComponent from "../componens/HeaderComponent";
import { Navigate } from "react-router-dom";

export const Settings = () => {
    const [hasAccess, setHasAccess] = useState(true)

    if(!hasAccess) return <Navigate to={"/error"}/>

  return (
    <>
      <HeaderComponent />
      <div>Settings</div>
    </>
  );
};
