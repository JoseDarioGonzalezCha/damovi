import React from "react";
import ReactDOM from "react-dom/client";

//Contexts

import GameListProvider from "./contexts/GameListContext.jsx";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/routes.jsx";
import { GlobalStyle } from "../styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameListProvider>
      <GlobalStyle />
      <RouterProvider router={route} />
    </GameListProvider>
  </React.StrictMode>
);
