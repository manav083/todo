import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Update from "./Update.jsx";

  let element = createBrowserRouter([
    {
      path: "/todo",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    { path: "update", element: <Update /> },
  ]);


export default element;