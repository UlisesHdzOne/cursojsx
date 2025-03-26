import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
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
      <h1>fech() | llamada a una API</h1>
      <ul>{HtmlUsers}</ul>
    </div>
  );
}

export default App;
