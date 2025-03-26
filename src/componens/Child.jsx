//import { useState } from "react";

export const Child = ({ handleLogin , userName}) => {
 // const [userName, setUserName] = useState("ulises");

  const handleClick = () => {
    handleLogin('uli');
  };
  return (
    <>
      <div className="child">
        <div>Este es el componente hijo</div>
        <p>nombre del usuario {userName}</p>
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
};


