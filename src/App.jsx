import "./App.css";
import { Menu } from "./componens/Menu";

function App() {
  const eventoClick = () => {
    console.log("precionado");
  };
  return (
    <>
      <h1 onClick={eventoClick}>dame click</h1>
    </>
  );
}

export default App;
