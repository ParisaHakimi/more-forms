import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const fnameHandler = (e) => {
    setFname(e.target.value);
    if (e.target.value.length < 2) {
      setFnameError("First Name must be at least 2 characters");
    }
  };
  const lnameHandler = (e) => {
    setLname(e.target.value);
    if (e.target.value.length < 2) {
      setLnameError("Last Name must be at least 2 characters");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 2) {
      setEmailError("Email must be at least 2 characters");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 2) {
      setPasswordError(
        "Password must be at least 8 characters. Passwords must match"
      );
    }
  };
  return (
    <form action="" className="form" onSubmit={formHandler}>
      <div className="input-group">
        <label htmlFor="">First Name</label>
        <input type="text" value={fname} onChange={fnameHandler} />
      </div>
      {fnameError ? <p>{fnameError}</p> : ""}

      <div className="input-group">
        <label htmlFor="">Last Name</label>
        <input type="text" value={lname} onChange={lnameHandler} />
      </div>
      {fnameError ? <p>{lnameError}</p> : ""}

      <div className="input-group">
        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={emailHandler} />
      </div>
      {fnameError ? <p>{emailError}</p> : ""}

      <div className="input-group">
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={passwordHandler} />
      </div>
      {fnameError ? <p>{passwordError}</p> : ""}

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
