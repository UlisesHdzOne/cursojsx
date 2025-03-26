import { useState } from "react";
import { Child } from "./componens/Child";

function App() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <h1>useEffect() | Ciclo de vida de componentes</h1>
      <button onClick={() => setShowChild(!showChild)}>Tooggle Child</button>
      {showChild && <Child />}
    </div>
  );
}

export default App;
