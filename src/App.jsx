import "./App.css";
import { animals } from "./data/animals";

const HTMLanimmals = animals.map((animal) => {
  return (
    <li key={animal.id}>
      <img src={animal.img} alt={animal.name} width={200} />
      <h3>{animal.name}</h3>
    </li>
  );
});

function App() {
  return (
    <>
      <h1>Renderizado de listas de objetos</h1>

      <ul>{HTMLanimmals}</ul>

      <p>la otra forma seria</p>
      <br />
      <ul>
        {animals.map((animal) => {
          return (
            <li key={animal.id}>
              <img src={animal.img} alt={animal.name} width={200} />
              <h3>{animal.name}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
