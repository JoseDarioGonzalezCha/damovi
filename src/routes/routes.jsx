import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import { Home } from "../pages/Home/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
