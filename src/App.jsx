import { useState } from "react";
import { Child } from "./componens/Child";

function App() {
  const [displayName, setDisplayName] = useState("");

  const login = (name) => {
    setDisplayName(name);
  };

  return (
    <div>
      <h1>props | comunicasion hijo a padre con funcion</h1>
      <h2>hola {displayName}</h2>
      <Child handleLogin={login} />
    </div>
  );
}

export default App;
