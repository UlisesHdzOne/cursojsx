import { useState } from "react";
import "./App.css";

function App() {
  const [myText, setMyText] = useState("Tu Nombre");
  const [myValue, setMyValue] = useState("");

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);

  const handleInput = (e) => {
    console.log(e.target.value);
    setMyValue(e.target.value);
  };

  const handleInputN1 = (e) => {
    setNum1(e.target.value);
  };

  const handleInputN2 = (e) => {
    setNum2(e.target.value);
  };

  const handleSum = () => {
    setSum(Number(num1) + Number(num2)); // Convertimos a número antes de sumar
  };

  return (
    <>
      <h1>hola a todos</h1>
      <h2>{myValue}</h2>
      <input
        type="text"
        placeholder={myText}
        value={myValue}
        onChange={handleInput}
      />

      <br />
      <h2>es para la suma de dos numeros : {sum}</h2>
      <input
        type="number"
        placeholder="Ingrese el primer numero"
        value={num1}
        onChange={handleInputN1}
      />

      <input
        type="number"
        placeholder="Ingrese el segundo numero"
        value={num2}
        onChange={handleInputN2}
      />

      <button onClick={handleSum}>Sumar</button>
    </>
  );
}

export default App;
