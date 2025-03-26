import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    //const data = await response.json();
    //setUsers(data);
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const HtmlUsers = users.map((user) => (
    <li key={user.id}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </li>
  ));

  return (
    <div>
      <h1>axios | llamada a una API</h1>
      <ul>{HtmlUsers}</ul>
    </div>
  );
}

export default App;
