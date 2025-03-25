import "./App.css";

function App() {
  const condition = false;

  return (
    <>
      <h1>Renderizado condicional</h1>
      {condition && <h1>Esto es visible</h1>}
      {!condition && <h1>Esto no es visible</h1>}


      {/* {condition ? <h1>Esto es visible</h1> : <h1>Esto no es visible</h1>}
     */}
     
     </>
  );
}

export default App;
