import { useState } from "react";
import { Child } from "./componens/Child";
import { HelloUser } from "./componens/HelloUser";

function App() {
  const [displayName, setDisplayName] = useState("");

  const login = (name) => {
    setDisplayName(name);
  };

  return (
    <div>
      <h1>State up | Conumincasion entre hermanos </h1>

      <h2>hola {displayName}</h2>

      <HelloUser userName={displayName}/>

      <Child handleLogin={login} userName={displayName} />
    </div>
  );
}

export default App;
