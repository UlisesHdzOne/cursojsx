import "./App.css";
import { Child } from "./componens/Child";
import { animals } from "./data/animals";

function App() {
  const text = "Hello World";
  const user = { name: "Juan", age: 25 };
  return (
    <>
      <h1>Props | Comunicasion entre componentes</h1>

      <Child msg={text} user={user} animals={animals} />
      <br/>

    </>
  );
}

export default App;
