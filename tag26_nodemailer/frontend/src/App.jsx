import { useState } from "react";
import "./App.css";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import LoginForm from "./components/Login";

function App() {
  const [entries, setEntries] = useState([]);

  const postLogin = (name, password) => {
    // hier post mit zugangsdaten an /users/login implementieren
    // das zurückgeschickte bearertoken dann für spätere verwendung speichern
  };

  const fetchEntries = async () => {
    // hier muss ein Bearer Token Mitgeschickt werden, findet heraus wie
    const response = await fetch("http://localhost:3000/entries");
    const json = await response.json();
    setEntries(json);
  };
  const postEntry = async (content) => {
    const response = await fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    console.log(response);
    // refetch entries after post
    fetchEntries();
  };
  return (
    <div>
      <p>Login</p>
      <LoginForm postLogin={postLogin} />
      <hr />
      <p>Hier könnt ihr - noch ohne login - einträge posten</p>
      <EntryForm postEntry={postEntry} />
      <hr />
      <p>Hier sollten später einträge erscheinen</p>
      <EntryList entries={entries} />
    </div>
  );
}

export default App;
