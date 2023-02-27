import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: email,
        password: password,
      };
      const result = await axios.post("http://localhost:3001/login", data);
      console.log("result::::;", result);
      if (result.status == 200) {
        setEmail("");
        setPassword("");

        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data));
        // localStorage.setItem("id", result.data._id);
        navigate("/todo");
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
        <form onSubmit={login} className="loginForm">
          <h3 style={{ margin: 10, padding: 10 }}>SignIn</h3>
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
          <button type="submit">Login</button>
          {err && (
            <div style={{ marginTop: 15, color: "red" }}>
              <span>{err}</span>
            </div>
          )}
          <div style={{ marginTop: 15 }}>
            <span>
              Don't have account, Please <a href="/register">SignUp</a> !!
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
