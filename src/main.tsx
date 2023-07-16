import { render } from "preact";
import { App } from "./App";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("app") as HTMLElement
);
