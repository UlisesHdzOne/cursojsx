import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const handleClickContador = () => {
    setNumber(number + 1);
    console.log("value", number);
  };

  return (
    <>
      <h1 onClick={handleClickContador}>contador {number}</h1>
      <button onClick={handleClickContador}>Incrementar</button>
    </>
  );
}

export default App;
