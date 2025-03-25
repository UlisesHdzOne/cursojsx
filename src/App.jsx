import "./App.css";

function App() {
  const movies = ["lord of the rings", "the hobbit", "the lord of the rings"];

  const HTMLmovies = movies.map((movie) => <li key={movie}>{movie}</li>);

  return (
    <>
      <h1>Renderizado de listas</h1>
      <ul>{HTMLmovies}</ul>

      <br />
      <h1>otra forma</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
