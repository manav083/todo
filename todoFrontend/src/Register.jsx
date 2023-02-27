import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };
      const result = await axios.post("http://localhost:3001/register", data);
      console.log("result::::;", result);
      if (result.status == 200) {
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
      } else if (result.status == 201) {
        setErr(result.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={register} className="loginForm">
          <h3 style={{ margin: 10, padding: 10 }}>Register</h3>
          <div style={{ display: "flex" }}>
            <div className="label">
              <label id="firstName" name="firstName">
                First Name:
              </label>
            </div>
            <input
              type="text"
              for="firstName"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <div className="label">
              <label id="lastName" name="lastName">
                Last Name:
              </label>
            </div>
            <input
              type="text"
              for="lastName"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>{" "}
          <br />
          <div style={{ display: "flex" }}>
            <div className="label">
              <label id="email" name="email">
                Email:
              </label>
            </div>
            <input
              type="email"
              for="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <div className="label">
              <label id="password" name="password">
                Password:
              </label>
            </div>
            <input
              type="password"
              for="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
          {err && (
            <div style={{ marginTop: 15, color: "red" }}>
              <span>{err}</span>
            </div>
          )}
          <div style={{ marginTop: 15 }}>
            <span>
              Already have Account? Please <a href="/login">SignIn</a> !!
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
