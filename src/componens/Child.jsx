import { useState } from "react";

export const Child = ({ handleLogin }) => {
  const [userName, setUserName] = useState("ulises");

  const handleClick = () => {
    handleLogin(userName);
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
