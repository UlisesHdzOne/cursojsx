import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log("enviado");
  };

  const handleUserNameInput = (e) => {
    setUser({ ...user, userName: e.target.value });
  };

  const handlePasswordInput = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <div onSubmit={handleSubmit}>
      <h1>Formularios</h1>
      <form>
        <fieldset>
          <label htmlFor="userName">Nombre</label>
          <input
            type="text"
            id="userName"
            onChange={handleUserNameInput}
            value={user.userName}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordInput}
            value={user.password}
          />
        </fieldset>

        <button>Enviar</button>
      </form>
      <button onClick={() => setUser({ userName: "", password: "" })}>
        logout
      </button>
    </div>
  );
}

export default App;
