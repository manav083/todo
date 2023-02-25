import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Update from "./Update.jsx";

  let element = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    { path: "update", element: <Update /> },
  ]);


export default element;