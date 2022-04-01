import logo from "./logo.svg";
import { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";
import "./App.css";

function App() {
  const usersEndPoint = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(usersEndPoint, {
      method: "GET"
    })
    .then(response => response.json())
    .then(users => setUsers(users));
  }, []);
  
  return (
    <div className="App">
      {
        users.map(user => {
          return (
            <ListItem
              id={user.id}
              key={user.id}
              name={user.name}
            />
          )
        })
      }
    </div>
  );
}

export default App;
