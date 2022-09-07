
import './App.css';
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const newUsers = [...users];
    newUsers.push({ fname, lname, email, password, cPassword });
    setUsers(newUsers);
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setCPassword("");
  };
  return (
    <form action="" className="form" onSubmit={formHandler}>
      <div className="input-group">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
      </div>
    </form>
  );
}

export default App;
